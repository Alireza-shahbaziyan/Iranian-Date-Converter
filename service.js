document.addEventListener("DOMContentLoaded", () => {

  const date_convert_form = document.getElementById("date_convert_form");

  date_convert_form.addEventListener("change",async  () => {

    const years_convert_form_select = document.getElementById("years_convert_form_select");
    const months_convert_form_select = document.getElementById("months_convert_form_select");
    const days_convert_form_select = document.getElementById("days_convert_form_select")

    const date = `${years_convert_form_select.value}/${months_convert_form_select.value}/${days_convert_form_select.value}`  
    console.log(date);
      // you need a token for use this API 
      // follow this link https://one-api.ir
    const URL = `https://one-api.ir/time/?token={TOKEN}&action=convert&date=${date}&source=miladi&timezone=Asia/Tehran`

   const response =await fetch(URL)
   if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
   }
   const data =await response.json()
   console.log(data.result);
   const dateNumber = `${data.result.date.jalali}`
   const day = `${data.result.day.name_week} ${data.result.day.name_month}  ${data.result.month.name}`

   const resultـcontent = document.getElementById("resultـcontent");
   
   resultـcontent.innerHTML = `${dateNumber}  ${day}`

  })
})