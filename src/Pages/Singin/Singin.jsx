import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';

const Singin = () => {
    const [data, setData] = useState(null)
    const handleSignin = () => {
        console.log('Signin btn clicked')
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                setData(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const githubProvider = new GithubAuthProvider();
    const handleSignInGithub = () => {
        console.log('github login clicked')
        signInWithPopup(auth,githubProvider)
        .then(result => {
            setData(result.user.providerData[0])
            console.log(result.user.providerData[0].displayName)
            console.log(result.user.providerData[0].email)
            console.log(result.user.providerData[0].photoURL)
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleLogOut = () => {
        console.log('log out')
        signOut(auth).then(() => console.log('success')).catch(error => console.log(error))
        setData('')
    }
    return (
        <div className='space-y-4'>
            <h1 className='text-3xl font-bold text-center'>Please Sign in</h1>
            <div className='flex flex-col items-center justify-center space-y-4'>

                {
                    data ?
                        <div>
                            <button onClick={handleLogOut} className='bg-blue-800 text-white font-bold rounded-2xl px-3 py-1 cursor-pointer'>Log Out</button>
                        </div> :
                        <div className='flex flex-col gap-4'>
                            <button onClick={handleSignin} className='bg-blue-800 text-white font-bold rounded-2xl px-3 py-1 cursor-pointer'>Sign in with Google</button>
                            <button onClick={handleSignInGithub} className='bg-blue-800 text-white font-bold rounded-2xl px-3 py-1 cursor-pointer'>Sign in with Github</button>
                        </div>
                }


                <h3>Name: {data?.displayName}</h3>
                <p>Email: {data?.email}</p>
                <img src={data?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Singin;








