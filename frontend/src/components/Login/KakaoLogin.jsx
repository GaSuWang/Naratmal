import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const KakaoRedirectHandler = () => {
    const location = useLocation();
    const KAKAO_CODE = location.search.split('=')[1]
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID
    const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI

    const getKakaoToken = () => {
        axios({
            url: '/api/user/login',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            data: {'code' : KAKAO_CODE}
        })
        .then(res => {
            if(res.data.loginResult !== '' && res.data.loginResult.substr(0, 7) === 'eyJ0eXA'){
                localStorage.setItem('token', res.data.loginResult)
                window.location.href = '/'
            }
            else if (res.data.loginResult !== ''){
                window.location.href = '/signup?userEmail=' + res.data.loginResult
            }
    })
        .catch(err => 
            console.log(err)
        )
    }



    useEffect(() => {
        if (!location.search) return;
        getKakaoToken();
    }, [])

    return <div>KakaoLogin</div>
}
export default KakaoRedirectHandler