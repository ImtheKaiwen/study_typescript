type UserData = {
    id: number,
    username: string,
    email: string,
}

function fetchUserDataFromServer(userId: number): Promise<UserData> {
    return new Promise((resolve, reject) => {
        console.log(`[SERVER] Fetching data for user ID: ${userId}...`);
        
        setTimeout(()=> {
            const isNetworkStable: boolean = true;

            if(isNetworkStable){
                const mockUser : UserData = {
                    id: 5,
                    username: 'kaiwen',
                    email: 'kaiwen.info@gmail.com',
                }

                resolve(mockUser);
            }else{
                reject(new Error('Database connection timeout.'));
            }
        }, 2000)
    })
}

fetchUserDataFromServer(5)
    .then((response: UserData) => {
        console.log(`Success! welcome back, ${response.username}`);
    })
    .catch((error: Error) => {
        console.log(`Alert: ${error.message}`);
    })
    .finally(()=>{
        console.log(`Operation complated`);
    })

// modern method

async function handleUserLogin(): Promise<void> {
    console.log("\nMethod B: Initializing secure modern auth...");

    try{
        const user : UserData = await fetchUserDataFromServer(202);
        console.log(`Secure Login Successful: ${user.email}`);
    }
    catch(error: any){
        console.error(`Secure Login Failed: ${error.message}`);
    }
    finally{
        console.log("Auth session cleanup completed.");
    }
}
handleUserLogin();

type Menu = {
    kalori: string,
    tarih: string,
    yemekler: string[]
}
type MealResponse = {
    aksam : Menu[],
    kahvalti: Menu[],
}

async function getGoogleData(): Promise<void>{
    const rawResponse: Response = await fetch("https://imthek4iwen-campus-meal-api.hf.space/kyk-menu?city=trabzon");
    const cleanData : MealResponse = await rawResponse.json(); 
    
    console.log(cleanData.aksam[5].yemekler[0]);
}

getGoogleData();