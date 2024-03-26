import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { axiosReq, axiosRes } from '../api/axiosDefaults';

// Code obtained from CI's Moments walkthrough project
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const history = useHistory();

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get('dj-rest-auth/user/')
            setCurrentUser(data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        handleMount()
    }, []);

    useMemo(() => {
        // Refreshes access token before making a request
        axiosReq.interceptors.request.use(
            async (config) => {
                try {
                    await axios.post('/dj-rest-auth/token/refresh/');
                } catch(err) {
                    setCurrentUser((prevCurrentUser) => {
                        if (prevCurrentUser) {
                            history.push('/log-in');
                        }
                        return null;
                    })
                    return config;
                }
                return config;
            },
            (err) => {
                return Promise.reject(err);
            }
        )

        // Refresh access token if a 401 error is thrown
        axiosRes.interceptors.response.use(
            (response) => response,
            async (err) => {
                if (err.response?.status === 401) {
                    try {
                        await axios.post('/dj-rest-auth/token/refresh/')
                    } catch (err) {
                        setCurrentUser(prevCurrentUser => {
                            if (prevCurrentUser){
                                history.push('/log-in')
                            }
                            return null
                        })
                    }
                    return axios.Cancel(err.config)
                }
                return Promise.reject(err)
            }
        )
    }, [history])

    return (
        <CurrentUserContext.Provider value={currentUser} >
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider >
    );
};

