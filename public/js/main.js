const submitbtn=document.getElementById("submitbtn")
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("citynames");
const temp=document.getElementById("temp");

const getinfo=async(event)=>{
    event.preventDefault()
    let cityval=cityname.value;
    if (cityval === "") {
        city_name.innerHTML="please enter the name of the city first"
    } else {
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}%20&appid=0ba3da3d2cef6a0032f552722eb561b6`
            const response = await fetch(url);
            let data =await response.json();
            let arrdata=[data];
            temp.innerHTML=arrdata[0].main.temp;

            city_name.innerHTML=cityval;

    }
}
submitbtn.addEventListener('click',getinfo);