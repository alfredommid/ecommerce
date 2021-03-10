const Payload = () => {
    const token = window.localStorage.getItem('token');
    if(token){
        //eslint-disable-next-line 
        const [header, payload, signature] = token.split('.');
        const base64 = payload.replace('-','+').replace('_','/');
        const payloadObj = JSON.parse(window.atob(base64));
        return payloadObj
    } else {
        null
    }
}
 
export default Payload;