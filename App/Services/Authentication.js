function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const signIn = async (email, password) => {
    await delay(1000);

    if (email.includes('itechart-group.com') && password === 'admin') {
        return 'jwtToken'
    }
    
    throw new Error('Authorization error')
}

export default signIn;