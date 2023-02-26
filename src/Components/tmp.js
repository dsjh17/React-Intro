const [car, setCar] = useState(null);
  let carName = [];
  let carCategory = [];
  
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/seankross/a412dfbd88b3db70b74b/raw/5f23f993cd87c283ce766e7ac6b329ee7cc2e1d1/mtcars.csv"
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setCar(data); //string 
      });
  }, []);

  const carArray = car?.split("\n"); //array
  carArray?.forEach((carRow, index) => {    
    const carColumns = carRow.split(",");
    if (index !== 0) {
      carName.push(carColumns[0]); //array of car names
    }
    else carCategory.push(carColumns);
  });
  carCategory=carCategory[0] //array of car categories i.e. 1st row