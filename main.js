


document.addEventListener("DOMContentLoaded", () => {
  // variables(months , years , days)

  const years =
    ["1939",
      , "1940",
      , "1941",
      , "1942",
      , "1943",
      , "1944",
      , "1945",
      , "1946",
      , "1947",
      , "1948",
      , "1949",
      , "1950",
      , "1951",
      , "1952",
      , "1953",
      , "1954",
      , "1955",
      , "1956",
      , "1957",
      , "1958",
      , "1959",
      , "1960",
      , "1961",
      , "1962",
      , "1963",
      , "1964",
      , "1965",
      , "1966",
      , "1967",
      , "1968",
      , "1969",
      , "1970",
      , "1971",
      , "1972",
      , "1973",
      , "1974",
      , "1975",
      , "1976",
      , "1977",
      , "1978",
      , "1979",
      , "1980",
      , "1981",
      , "1982",
      , "1983",
      , "1984",
      , "1985",
      , "1986",
      , "1987",
      , "1988",
      , "1989",
      , "1990",
      , "1991",
      , "1992",
      , "1993",
      , "1994",
      , "1995",
      , "1996",
      , "1997",
      , "1998",
      , "1999",
      , "2000",
      , "2001",
      , "2002",
      , "2003",
      , "2004",
      , "2005",
      , "2006",
      , "2007",
      , "2008",
      , "2009",
      , "2010",
      , "2011",
      , "2012",
      , "2013",
      , "2014",
      , "2015",
      , "2016",
      , "2017",
      , "2018",
      , "2019",
      , "2020",
      , "2021",
      , "2022",
      , "2023",
      , "2024",]

  const months_convert_form_select = [
    "February"
    , "January"
    , "March"
    , "April"
    , "May"
    , "June"
    , "July"
    , "August"
    , "September"
    , "October"
    , "November"
    , "December"]

  const days_convert_form_select = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

  // create options tag and select years 
  const yearsSelectElement = document.getElementById('years_convert_form_select');

  years.forEach(optionItem => {
    const optionElement = document.createElement("option")
    optionElement.value = optionItem
    optionElement.textContent = optionItem;
    yearsSelectElement.appendChild(optionElement)

  })

  //  create options tag in selece months  tag 
  // now get select tag object with id 
  const monthsSelectElement = document.getElementById('months_convert_form_select');
  let a = 1
  months_convert_form_select.forEach(optionItem => {
    const optionElement = document.createElement("option")
    optionElement.value = a
    optionElement.textContent = optionItem;
    monthsSelectElement.appendChild(optionElement)
    a++;

  })

  // create options tag and select days 
  const daysSelectElement = document.getElementById('days_convert_form_select');

  days_convert_form_select.forEach(optionItem => {
    const optionElement = document.createElement("option")
    optionElement.value = optionItem
    optionElement.textContent = optionItem;
    daysSelectElement.appendChild(optionElement)

  })
})
