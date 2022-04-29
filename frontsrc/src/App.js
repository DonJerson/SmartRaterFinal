import React, { Component } from 'react';
import { Router, Link,navigate } from "@reach/router";
import MainView from './elements/MainView';
import QuoteView from './elements/QuoteView';
import AutoQuote from './elements/AutoQuote';
import Results from './elements/Results';
import Elements from './elements/Elements';
import Teteo from './elements/Teteo';
import SavedQuotes from './elements/SavedQuotes';
import Terms from './elements/Terms';
import PrivacyPolicy from './elements/PrivacyPolicy';
import { createBrowserHistory } from 'history';
import Dashboard from './views/Dashboard';
// Import the functions you need from the SDKs you need


const axios = require('axios');

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = false;

const     newCustomerRaw ={
  "id": 7,
  "profilePicture": {url:""},
  "supportChats": [],
  "carList": [],
  "additionalDriversList": [],
  "quoteList": [],
  "password": "testuser",
  "last_login": null,
  "is_superuser": false,
  "username": "testuser",
  "is_staff": false,
  "is_active": true,
  "date_joined": "2021-11-14T23:02:56Z",
  "first_name": "Test",
  "middle_name": null,
  "last_name": "user",
  "email": "",
  "maritalStatus": null,
  "phone": null,
  "medicalCoverage": null,
  "biCoverage": null,
  "uninsuredMotorist": null,
  "homeOwner": false,
  "homeOwnership": null,
  "driversLicense": "",
  "passport": null,
  "ssn": null,
  "dob": null,
  "propertyDamageCoverage": null,
  "address1": null,
  "address2": null,
  "city": null,
  "state": null,
  "zipcode": null,
  "created_at": "2021-11-14T23:04:22.281908Z",
  "updated_at": "2021-11-14T23:04:22.281929Z",
  "groups": [],
  "user_permissions": []
}

const brandss=
['AC', 'Acura', 'Arola', 'Aixam', 'Mega', 'Alfa Romeo', 'Alpine', 'Alpine-Renault', 
'Alvis', 'AMC', 'Renault', 'Eagle', 'Anadol', 'Ariel', 'ARO', 'Artega', 'Asia', 
'Aston Martin', 'Lagonda', 'Audi', 'Autobianchi', 'DKW', 'Auto-Union', 'Auverland',
 'Bentley', 'Bitter', 'BMW', 'Bond', 'Lloyd', 'Borgward', 'Goliath', 'Bristol', 
 'Austin', 'Morris', 'Riley', 'Wolseley', 'MG', 'Vanden Plas', 'Princess',
 'Austin-Healey', 'Mini', 'Rover', 'Bugatti', 'Buick', 'Cadillac', 'Caterham', 
 'Checker', 'Chevrolet', 'Chrysler', 'Imperial', 'Talbot', 'Simca', 'Citro?', 'DS'
, 'Cizeta', 'Dacia', 'Daewoo', 'Saehan', 'DAF', 'Volvo', 'Daihatsu', 'Daimler',
'Datsun', 'Delahaye', 'DeLorean', 'DeSoto', 'De Tomaso', 'Dodge', 'RAM', 'Donkervoort',
 'Edsel', 'e.GO Mobile', 'Eicher Polaris', 'Elva', 'Facel Vega', 'Ferrari', 'Fiat', 
 'Ford', 'Bertone', 'Fisker', 'Karma', 'GMC', 'Freightliner', 'FSO', 'GAZ', 'Geo', 
 'Gilbern', 'Ginetta', 'Glas', 'BMW-Glas', 'GTA', 'Gumpert', 'Healey', 'Nash-Healey', 
 'Heinkel', 'Hennessey', 'Hillman', 'Hindustan', 'Holden', 'Honda', 'Hudson', 'Humber', 
 'Hummer', 'Hyundai', 'Genesis', 'Trabant', 'IFA', 'AWZ', 'Wartburg', 'Barkas', 'Infiniti', 
 'Innocenti', 'Invicta', 'Isdera', 'Iso', 'Isotta Fraschini', 'Isuzu', 'Iveco', 'Jaguar', 
 'Jeep', 'Jensen', 'JPX', 'Kia', 'Koenigsegg', 'KTM', 'Lada', 'Lamborghini', 'Lancia', 'Land Rover',
  'Lexus', 'Ligier', 'Lincoln', 'Lotus', 'LTI', 'LEVC', 'LuAZ', 'Lynx', 'Mahindra', 'Marcos', 'Marlin',
   'Maruti', 'Maserati', 'Mastretta', 'Deutsch-Bonnet', 'Ren? Bonnet', 'Matra', 'Mazda', 'Mazzanti', 'McLaren', 'Mercedes', 'Maybach', 'Mercury', 'Merkur',
'Messerschmitt', 'FMR', 'Mia', 'Micro', 'Mitsubishi', 'Monica', 'Monteverdi', 'Morgan', 'Moskwitch',
'Nash', 'Rambler', 'Naza', 'Nissan', 'Noble', 'NSU', 'Oldsmobile', 'Oltcit', 'Opel', 'Packard', 'Pagani',
 'Panhard', 'Panoz', 'Panther', 'Peel', 'Perodua', 'Peugeot', 'PGO', 'Piaggio', 'Plymouth', 'Polestar', 
 'Pontiac','As?na', 'Porsche', 'Premier', 'Proton', 'Puma', 'Ranger', 'Reliant', 'Rolls-Royce', 'Saab',
  'Saleen', 'Samsung', 'San', 'Santa Matilde', 'Santana', 'Saturn','Scion', 'Seat', 'SSC', 'Singer', 
  'Skoda', 'smart', 'Spyker', 'SsangYong', 'Standard', 'Triumph', 'Studebaker', 'Subaru', 'Sunbeam',
   'Sunbeam-Talbot', 'Suzuki','Tata', 'Tatra', 'Tazzari', 'Tesla', 'Tornado', 'Toyota', 'TVR', 'UAZ',
    'Vauxhall', 'Venturi', 'Volkswagen', 'Westfield', 'Wiesmann', 'Zastava', 'ZAZ', 'Zil']



const getUrl = window.location;

baseUrl = "https://jersonmendez.com:8081/";

let neoUrl ="https://jersonmendez.com"

let baseWss = "18.216.39.52";
if(getUrl.host.includes(":8080")){
  neoUrl=getUrl.host.substring(0,getUrl.host.length-4)
  baseUrl = getUrl.protocol+ "//" + getUrl.hostname +"8081/";
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}


class App extends Component {
  constructor(props){
    super(props)
    const elements = new Elements();
    let currentStep=0

    let attributeSet=elements.listOfAutoQuoteAttributeSets

    let data={filteredBrands:[],filteredModels:[],loading:false,
      driverStep:0,vehicleStep:0,additionalVehicleStep:0,additionalDriverStep:0,
      modal:{active:false,type:"Login",innerLoading:false}
      ,selectedYear:'',selectedBrand:'',selectedModel:'',filterSearch:"",
  filterModelSearch:"",filteredBrands:[],filteredModels:[],
  models:[],brands:elements.brands,
    typesOfProperty:['Single Family Home', 'Townhouse', 
    'Condo/Co-op', 'Apartment', 'Mobile Home', 'MDuplex', 'Multi Family Home'],
    steps:[],step:currentStep}

    let newQuote ={...elements.newQuote}
    let cookieUser={}
    
    attributeSet.forEach(element => {
      
      cookieUser[element] = window.localStorage.getItem(element)
      newQuote[element] = window.localStorage.getItem(element)
      data[element] = window.localStorage.getItem(element)
    });
    //console.log("diablo trabajandi",window.localStorage.getItem("vehicleAmount"))
    if(window.localStorage.getItem("vehicleAmount")&&parseInt(window.localStorage.getItem("vehicleAmount"))>0){
      for (let index = 1; index <= parseInt(window.localStorage.getItem("vehicleAmount")-1); index++) {
        //console.log("diablo trabajando",window.localStorage.getItem('vin'+(index+1)))
        cookieUser['vin'+(index+1)] = window.localStorage.getItem('vin'+(index+1))
        newQuote['vin'+(index+1)] = window.localStorage.getItem('vin'+(index+1))
        data['vin'+(index+1)] = window.localStorage.getItem('vin'+(index+1))
      }
    }
    if(window.localStorage.getItem("driverAmount")&&parseInt(window.localStorage.getItem("driverAmount"))>0){
      for (let index = 1; index <= parseInt(window.localStorage.getItem("driverAmount")-1); index++) {
        //console.log("diablo trabajando",window.localStorage.getItem('vin'+(index+1)))
        cookieUser['dob'+(index+1)] = window.localStorage.getItem('dob'+(index+1))
        newQuote['dob'+(index+1)] = window.localStorage.getItem('dob'+(index+1))
        data['dob'+(index+1)] = window.localStorage.getItem('dob'+(index+1))
        cookieUser['firstName'+(index+1)] = window.localStorage.getItem('firstName'+(index+1))
        newQuote['firstName'+(index+1)] = window.localStorage.getItem('firstName'+(index+1))
        data['firstName'+(index+1)] = window.localStorage.getItem('firstName'+(index+1))
        cookieUser['middleName'+(index+1)] = window.localStorage.getItem('middleName'+(index+1))
        newQuote['middleName'+(index+1)] = window.localStorage.getItem('middleName'+(index+1))
        data['middleName'+(index+1)] = window.localStorage.getItem('middleName'+(index+1))
        cookieUser['lastName'+(index+1)] = window.localStorage.getItem('lastName'+(index+1))
        newQuote['lastName'+(index+1)] = window.localStorage.getItem('lastName'+(index+1))
        data['lastName'+(index+1)] = window.localStorage.getItem('lastName'+(index+1))
      }
    }
    //set listing user attributes
    data.vehicleLabel="How Many Additional Vehicles Will There Be?"
    data.driverLabel="How Many Additional Drivers Will There Be?"
    this.state={dimensions:{width:1200,height:800},customer:cookieUser,newQuote,data,currentStep,
    newCustomer:newCustomerRaw,user:newCustomerRaw,quoteSteps:[],quoteNames:[],quoteStepsRaw:[],
  data,
    
    }
    this.mainViewRef=React.createRef()
    this.newQuoteRef=React.createRef()
    this.savedQuotesViewRef=React.createRef()
    this.quoteViewRef=React.createRef()
    this.newAutoQuoteViewRef=React.createRef()
    this.vehiclesRef=React.createRef()
    this.driversRef=React.createRef()
    this.resultsRef=React.createRef()
    this.resumeRef=React.createRef()
  }
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if(this.state.data.modal.active && this.state.data.modal.type=="Login"){
        this.login(this.state.data.username,this.state.data.password)
      }
      // this.handleData("filterSearch",e.target.value)
    }
    if (e.key === 'Escape') {
      //close modal
      this.handleData("modal",{active:false,type:"Login"})
      // this.handleData("filterSearch",e.target.value)
    }
  }


  async getUserInfo(userId){
    let data = await axios.get(baseUrl+"api/customer/"+userId).then(res=>
    {return res.data})
    this.setState({customer:data})
  }
  refreshCurrentStep(){
    let myVar = window.location.pathname.substr(11,window.location.pathname.length)
    let newData={...this.state.data}
    for (let index = 0; index < this.state.quoteSteps.length; index++) {
      const element = this.state.quoteSteps[index];
      if(element==myVar){
        newData.step=index
        this.setState({data:newData})
        break
      }
      
    
    }
    // if(this.state.filteredModels.length==0&&this.state.data.brand!=''){
      this.fetchModels(this.state.data.brand)
  }
  // ...
  
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
    // console.log("testeo",this.state.quoteSteps[3])
    if((window.location.pathname.substr(11,23)==this.state.quoteSteps[3]||
    
    window.location.pathname.substr(11,23)==this.state.quoteSteps[2])&&this.state.filteredModels.length==0){
      console.log("getting modelss",this.state.data.brand)
      this.fetchModels(this.state.data.brand)
      
    }
  }

  onRouteChanged() {
  }

  componentDidMount(){
    this.updateDimensions()
    const elements = new Elements();
    let filteredBrands=[]
    let filteredModels=[]
    let myVar = window.location.pathname.substr(11,window.location.pathname.length)


    // if userid cookie is set, log in the user
    this.getUser()
    
    elements.brands.forEach(element => {
      let myElement = element.toLowerCase()
      if(myElement.includes(this.state.data.filterSearch.toLowerCase())){
        filteredBrands.push(element)
      }
    });
    if(filteredBrands===[]){
      filteredBrands= elements.brand
    }
    this.state.data.models.forEach(element => {
      
      if(!filteredModels.includes(element.model)){
        filteredModels.push(element.model);
        
      }
    });
    let neoData={...this.state.data}
    let neoQuote={...this.state.newQuote}
    neoData.filteredBrands=filteredBrands
    neoData.filteredModels=filteredModels
    const that=this
    async function fetcher(){

      ////1st Divide FETCHER function in segments

      let myVar =window.location.pathname.substr(11,window.location.pathname.length)
      let getModels=[]
      let newData = {...neoData}
      //let myBrand=window.localStorage.getItem('selectedBrand')
      let myBrand=neoQuote.brand
      let myEl = document.getElementById('myBox')
      /////1ST SEGMENT IF BRAND IS SET, FETCH MODELS DATA FROM BRAND
      if(myBrand){
        if(myBrand!=null){
          getModels= await axios.post(`https://5m6n0z1yta.execute-api.us-east-2.amazonaws.com/dev/getModels/`,{"brand":myBrand}).then(resp=>{

          return resp.data
          })
          if(myVar=="select-model"&&getModels.length===0){
            navigate(neoData.steps[1])
            console.log("faux")
            return
          }
        }
        }
      /////2ND SEGMENT MAKE STEP ELEMENT FLY IN
      if(myEl){
        await new Promise(r => setTimeout(r, 290));
        myEl.classList.remove("inEffect")
      }
        /////SEGMENT Filter Brands

       // newData.steps=that.props.steps
        const elements = new Elements();
        let filteredBrands=[]
        let filteredModels=[]
 

        getModels.forEach(function(element,index){
          filteredModels.push(element.model)
        });
        
        elements.brands.forEach(element => {
          let myElement = element.toLowerCase()
          if(myElement.includes(neoData.filterSearch.toLowerCase())){
            filteredBrands.push(element)
          }
        });
       
        if(filteredBrands===[]){
          filteredBrands= elements.brand
        }
        if(window.location.pathname.includes('model')){
          neoData.models.forEach(element => {
          let myElement = element.toLowerCase()
          if(myElement.includes(neoData.filterModelSearch.toLowerCase())){
            filteredModels.push(element)
          }
        })}
         /////SEGMENT assign current step
        for (let index = 0; index < elements.listOfAutoQuotePaths.length; index++) {
          const element = elements.listOfAutoQuotePaths[index];
          if(element==myVar){
            newData.step=index
            break
          }
        }
        /// SEGMENT GET DATA FROM localStorage
        [elements.listOfAutoQuoteNames].forEach(element => {
          if(window.localStorage.getItem(element)){
            newData[element]=window.localStorage.getItem(element)
          }
        })
        if(newData.brand){
        that.fetchModels(newData.brand)}
        newData.firstName=window.localStorage.getItem("firstName")
        newData.lastName=window.localStorage.getItem("lastName")
        newData.city=window.localStorage.getItem("city")
        newData.state=window.localStorage.getItem("state")
        newData.zipcode=window.localStorage.getItem("zipcode")
        newData.unit=window.localStorage.getItem("unit")
        newData.models=filteredModels
        newData.filteredBrands=filteredBrands
        newData.filteredModels=filteredModels
        newData.loading=false
        newData.steps=elements.listOfAutoQuotePaths
        that.setState({step:newData.step,quoteSteps:elements.listOfAutoQuotePaths,data:newData,filteredBrands,filteredModels})
        that.forceUpdate()
      }
    
    fetcher()
    this.setState({filteredBrands,filteredModels,data:neoData})
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("keydown", this.handleKeyDown);
    this.unlisten = createBrowserHistory().listen((location, action) => {
      this.refreshCurrentStep()
    });
  }
  componentWillUnmount(){
    this.unlisten();
    window.removeEventListener('resize',this.updateDimensions)
    window.removeEventListener('keydown',this.handleKeyDown)
  }
  systemLogin=(user,token)=>{
    window.localStorage.setItem('token',token);
    window.localStorage.setItem('userId',user.id);
    //let notifications = [].concat(user.activeLeasing).concat(user.activeRenting)
    //const notificationClient = this.openNotifications(user.id)
    this.setState({user:user,fetchedUser:true,logged:true});
}
handleRegister = (data=false)=>{
  let neoData = {...this.state.data}
  let neoModal = {...neoData.modal}
  neoModal.innerLoading=true
  neoData.modal=neoModal
  this.setState({data:neoData})
  const that = this
  async function register (){
    let sendingData={}
    if(data){
      sendingData=data
    }else{
      sendingData={}
    }
    let myUsername = that.state.data.username
    let myPassword = that.state.data.password
    sendingData.username=myUsername
    sendingData.password=myPassword

    sendingData.phoneNumber=that.state.data.phoneNumber
    let social = that.state.data.modal.social

    const isEmail = await validateEmail(myUsername)
    if(!isEmail){
      neoModal.innerLoading=false
      that.setState({modal:neoModal})
      return
    }
    if(myPassword.length<3){
      neoModal.innerLoading=false
      that.setState({modal:neoModal})
      return
    }
    if(social){
      axios.post(baseUrl+"custom-auth/",sendingData)
      .then(res=>{
        that.systemLogin(res.data.user,res.data.token)
        neoModal.innerLoading=false
        neoModal.social=false
        neoModal.active=false
        that.setState({modal:neoModal})
        try{that.mainViewRef.current.click()}catch (err){console.log(err)}}
        ).catch(err=>{
          neoModal.innerLoading=false
          neoModal.innerError="error post info fetching"
          neoModal.social=false
          that.setState({modal:neoModal})
          // console.log("hay bosbo")
          return
            })
    }else{
      sendingData.first_name=capitalize(that.state.data.firstName)
      sendingData.last_name=capitalize(that.state.data.lastName)
      sendingData.name=sendingData.first_name+" "+sendingData.last_name
      await axios.post(baseUrl+"api/existing/",sendingData)
      .then(res=>{
        if(res.data.message==="existe"){
          that.login(sendingData.username,sendingData.password)
          return
                }
                else{
                  that.login(sendingData.username,sendingData.password)
                  return
                }
        },err=>{
          
        neoModal.innerLoading=false
        neoModal.innerError="Este correo ya existe, intente iniciar sesión"
        that.setState({modal:neoModal})
      })
      
    }


    //window.location.href = ("https://carly.do")
  }
  register()
}

login = (username,password) =>{
  
  let neoData = {...this.state.data}
  let neoModal = {...neoData.modal}
  neoModal.innerLoading=true
  neoModal.innerError=null
  neoData.modal=neoModal
  this.setState({data:neoData})
  const that = this
  axios.post(baseUrl+"token-auth/",{username,password})
  
  .then(res=>{
    // console.log("success")
      that.systemLogin(res.data.user,res.data.token)
      let neoData = {...that.state.data}
      let neoModal = {...neoData.modal}
      neoModal.innerLoading=false

      neoModal.innerError=null
      neoModal.active=false
      neoData.modal=neoModal
      neoData.loading=false
      that.setState({data:neoData})
      try{that.mainViewRef.current.click()}catch (err){console.log(err)}
      return
  },
  error=>{
    
    // console.log("hay bobooo")
    let neoModal = {...this.state.modal}
    neoModal.innerLoading=false
    neoModal.innerError="Usuario y/o contraseña incorrecta"
    this.setState({modal:neoModal})
      return false
})}
quoteStateHandler=(e)=>{
  
  let neoQuote = {...this.state.newQuote}
  neoQuote[e.target.name]=e.target.value
  this.setState({newQuote:neoQuote})
}
stateHandling=(tag,latter)=>{
  this.setState({[tag]:latter})
}
getUser=()=>{
  const token = window.localStorage.getItem('token')
  // console.log("hola chicos, no hagan drogas",firstName,zipzip,lastName,address1,state,city)
  let userRequest=async function(){return null}
  let neoAxios ={...axios}
  if(token){
    axios.defaults.headers.get['Authorization']="JWT "+token
    userRequest = axios.get(baseUrl + `current_user/`)
    let neoModal = {...this.state.modal}
    neoModal.innerLoading=true
    neoModal.innerError=null
    this.setState({modal:neoModal})
  }
  axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded'
  
  // const featuresRequest = axios.get(baseUrl +"getFeatures/")
  // const statesRequest = axios.get(baseUrl +"getStates/")
  // const countriesRequest = axios.get(baseUrl +"getCountries/")
  // const results = axios.post(baseUrl+"getResults/",{"locationCode":null})
  // const featuresRequest = axios.get(baseUrl +"getFeatures/")
  // neoAxios.defaults.proxy = {host:"https://cors-anywhere.herokuapp.com"}

  neoAxios.defaults.proxy = null
  delete neoAxios.defaults.headers.get['Authorization'];
  const currenciesReq = neoAxios.get("https://api.exchangerate-api.com/v4/latest/USD")
  Promise.all([userRequest,currenciesReq,]).then(res => {
    const data = res[0].data;
    // const rawResults=res[2].data;
    const currenciesData=res[1].data;
    let newSteps = {...this.state.steps}
    // if(data.is_superuser){this.fetchSupportChats()}
    let switcher;
    let neoCurrency = {...this.state.currency}
    neoCurrency.rates=currenciesData.rates
    data?switcher=true:switcher=false
    this.setState({user:data,
      fetchedUser:switcher,shippingAddress:true,
      logged:switcher,currency:neoCurrency,
      dialogFetching:false,steps:newSteps})
  }).catch(error=>{console.log("error getting user",error)})
 }
  updateDimensions=()=>{
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
    if (width < 769){
      const newDimensions={width:documentElement.clientWidth, height:height, isMobile:true}
      this.setState({dimensions:newDimensions})
      return
    }
    const newDimensions={width:documentElement.clientWidth, height:height-100, isMobile:false}
    this.setState({dimensions:newDimensions})
  }
  stateHandling=(tag,latter)=>{
    this.setState({[tag]:latter})
  }
  eventStateHandling=(e)=>{
    let newData={...this.state.data}
    let neoQuote = {...this.state.newQuote}
    window.localStorage.setItem(e.target.name,e.target.value)
    newData[e.target.name]=e.target.value
    neoQuote[e.target.name]=e.target.value
    this.setState({data:newData,newQuote:neoQuote})
  }
  handleData=(name,value)=>{
    let newData={...this.state.data}
    window.localStorage.setItem(name,value)
    newData[name]=value
    
    this.setState({data:newData})
  }
  fetchModels=(brand)=>{

    axios.post(`https://5m6n0z1yta.execute-api.us-east-2.amazonaws.com/dev/getModels/`,{"brand":brand}).then(resp=>{
      const newModels = resp.data
      let neoFilteredModels=[]
      let newData = {...this.state.data}
      newData.models = newModels
      newModels.forEach(element => {
        if(!neoFilteredModels.includes(element.model.toLowerCase())){
          neoFilteredModels.push(element.model)
        }
      });
      newData.filteredModels=neoFilteredModels
      this.setState({filteredModels:neoFilteredModels})
      this.forceUpdate()
    })
  }

  async flyOutEffect(url,step){
    let myEl = document.getElementById('myBox')
    if(myEl){
      myEl.classList.add("outEffect")
      await new Promise(r => setTimeout(r, 350));
      myEl.classList.remove("outEffect")
      this.handleData("step",step+1)
      navigate(url)
    }
  }
  driverSelectorFunction=(e)=>{
    let newData = {...this.state.data}
    newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
    newData.driverStep+=1
    window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
    this.setState({data:newData})
      this.flyOutEffect(e.target.parentElement.getAttribute('value'),newData.driverStep)
    }
    vehicleSelectorFunction=(e)=>{
      let newData = {...this.state.data} 
      newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
      newData.vehicleStep+=1
      window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
      this.setState({data:newData})
        this.flyOutEffect(e.target.parentElement.getAttribute('value'),newData.vehicleStep)
      }
    selector=(e)=>{
      let newData = {...this.state.data}
      let neoQuote={...this.state.newQuote}
      neoQuote[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
      newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
      window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
      this.setState({newQuote:neoQuote,data:newData})
        this.flyOutEffect(e.target.parentElement.getAttribute('value'),newData.step)
      }
    selectorVehicleFunction=(e)=>{
        let newData = {...this.state.data}
        newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
        window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
        this.setState({data:newData})
        this.flyOutEffect(e.target.parentElement.getAttribute('value'),newData.step+1)
      }
      selectorVehicleFunctionLast=(e)=>{
        let newData = {...this.state.data}
        let lastDigit=parseInt(e.target.parentElement.getAttribute('name').slice(-1))
        
        newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')
        window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
        this.setState({data:newData})
        if(lastDigit===(parseInt(this.state.data.vehicleAmount)+1)){
        this.resumeRef.current.click()
      }else{
        this.flyOutEffect(e.target.parentElement.getAttribute('value'),newData.step+1)
      }
    }
    driverSelector=(e)=>{
      let newData = {...this.state.data}
     // newData.step+=1
      newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value')   
      window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
      this.setState({data:newData})
      let val =parseInt(e.target.getAttribute('value'))
      if(val==1){
        this.resultsRef.current.click()
      }else{
        this.driversRef.current.click()
      }
      }

      vehicleSelector=(e)=>{
        let newData = {...this.state.data}
        //newData.step+=1
        newData[e.target.parentElement.getAttribute('name')] = e.target.getAttribute('value') 
        window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
        this.setState({data:newData})
        //let val =parseInt(e.target.getAttribute('value'))

          //this.vehiclesRef.current.click()
      
        }
        setAdditionalDrivsNext = (e)=>{
          //this.resultsRef.current.click()
          // let newData = {...this.state.data}
          // let newQuote ={...this.state.newQuote}
          // newData.vehicleAmount=0
          // newQuote.vehicleAmount=0
          // window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
          // this.setState({data:newData,newQuote})
          //this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step)
        }
        setAdditionalDrivs=(e)=>{
          let newData = {...this.state.data}
          newData.additionalDriverStep=e
          newData.diverAmount=0
          let newQuote ={...this.state.newQuote}
          newQuote.diverAmount=0
          this.setState({data:newData,newQuote})
        }
        setAdditionalVehsNext=(e)=>{
          e.preventDefault()
          e.stopPropagation()
          let newData = {...this.state.data}
          let newQuote ={...this.state.newQuote}
          newData.vehicleAmount=0
          newQuote.vehicleAmount=0
          window.localStorage.setItem(e.target.parentElement.getAttribute('name'),e.target.getAttribute('value'))
          this.setState({data:newData,newQuote})
          this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step)
        }
        setAdditionalVehs=(e)=>{
          let newData = {...this.state.data}
          newData.additionalVehicleStep=e
          newData.vehicleAmount=0
          let newQuote ={...this.state.newQuote}
          newQuote.vehicleAmount=0
          this.setState({data:newData,newQuote})
        }
   next=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(this.state.quoteSteps.length===this.state.data.step+1){
      this.flyOutEffect("/autoquote/results")
    }else{
    this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step)}
  }
  skipVehicle=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+4]}`,this.state.data.step)
  }
  lastVehicle=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.resumeRef.current.click()
  }
  lastDriver=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.resultsRef.current.click()
  }
  saveData=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step)
  }
  closeModal=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    let newoData = {...this.state.data}
    newoData.modal.active=false
    newoData.modal.type=""
    this.setState({data:newoData})
  }
  skip=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(this.state.data.driverAmount>1){
      this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+2]}`,this.state.data.step)
    }else{
      this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step)}
  }
  quoteAuto=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.flyOutEffect(`/autoquote/${this.state.quoteSteps[this.state.data.step+1]}`,this.state.data.step) 
  }
  render(){
    let myYears=[]
    for (let index = 0; index < 24; index++) {
      myYears.push(2021-index);
    }
    ///
    const refs={quoteView:this.quoteViewRef,savedQuotesView:this.savedQuotesViewRef,
      newQuoteView:this.newQuoteRef,newAutoQuoteView:this.newAutoQuoteViewRef,
      mainView:this.mainViewRef,driversRef:this.driversRef,vehiclesRef:this.vehiclesRef,resultsRef:this.resultsRef,resumeRef:this.resumeRef,}
    const methods={axios,baseUrl,selector:this.selector,setAdditionalVehs:this.setAdditionalVehs,
      setAdditionalVehsNext:this.setAdditionalVehsNext,
      driverSelector:this.driverSelector,vehicleSelector:this.vehicleSelector,
      flyOutEffect:this.flyOutEffect,closeModal:this.closeModal,login:this.login,
      handleRegister:this.handleRegister,systemLogin:this.systemLogin,next:this.next,
      stateHandling:this.stateHandling,fetchModels:this.fetchModels,quoteStateHandler:this.quoteStateHandler,
      eventStateHandling:this.eventStateHandling,handleData:this.handleData,
      setAdditionalDrivsNext:this.setAdditionalDrivsNext,setAdditionalDrivs:this.setAdditionalDrivs}
      const pathAux=['select-year','select-model','select-brand',
      'select-additionalCar','select-insured','select-homeowner','select-married'
      ,'select-accident','select-dui','select-name','select-dob','select-sex','select-additionalDriver'
      ,'select-military','select-address','select-email','select-phone']
    const userPack = {dimensions:this.state.dimensions,modal:this.state.modal,pathAux,
      filteredModels:this.state.filteredModels,
      filterSearch:this.state.filterSearch,filterModelSearch:
      this.state.filterModelSearch,newQuote:this.state.newQuote,
    methods,refs,data:this.state.data,user:this.state.user,logged:this.state.logged,
    quoteSteps:this.state.quoteSteps,
    // listOfAutoQuoteSteps,listOfHealthQuoteSteps,listOfMedicareQuoteSteps,listOfLifeQuoteSteps,
    // listOfCommercialQuoteSteps,listOfHomeQuoteSteps
    }
    const elements = new Elements()
    let portingElements= {paths:elements.listOfAutoQuotePaths,
      labels:elements.listOfAutoQuoteLabels,names:elements.listOfAutoQuoteNames}
    console.log('beast')
      // console.log("current Quote",this.state.newQuote)
      // console.log("elements",elements.listOfAutoQuotePaths)
    return(
      <>
      <Router>
      <SavedQuotes path="/savedquotes" userPack={userPack}/>
        <MainView path="/" userPack={userPack}/>
        <Teteo path="/teteo" userPack={userPack}/>
        <QuoteView path="/freequote" userPack={userPack}/>
        <Dashboard path="/dashboard" userPack={userPack}/>
        <PrivacyPolicy path="/privacypolicy" userPack={userPack}/>
        <Terms path="/terms" userPack={userPack}/>
        {elements.listOfAutoQuoteSteps.map((element,index)=>(
          <>
            <AutoQuote type="autodefault" elements={portingElements}
            steps={this.state.quoteSteps} 
             path={'/autoquote/'+element.path} key={index} userPack={userPack}/>
          </>
        ))}

        {['/autoquote','/homequote','/lifequote','/healthquote','/businessquote','/commercialquote']
        .map((step,index)=>(
          <Results path={`${step}/results`} key={index} userPack={userPack}/>))
        }
      </Router>
      <Link key={1} to="/" className="buttonClass" ref={this.mainViewRef}/>
      <Link key={2} to="/autoquote/results" className="buttonClass" ref={this.resultsRef}/>
      <Link key={3}  to="/savedquotes" className="buttonClass" ref={this.savedQuotesViewRef}/>
      <Link key={4} to="/freequote" className="buttonClass" ref={this.quoteViewRef}/>
      <Link key={5} to="/newquote/select-vehicle-vin" className="buttonClass" ref={this.newQuoteRef}/>
      <Link key={6} to="/autoquote/select-vehicle-vin" className="buttonClass" ref={this.newAutoQuoteViewRef}/>
      <Link key={7} to="/autoquote/select-driver-name0" className="buttonClass" ref={this.driversRef}/>
      <Link key={8} to="/autoquote/select-vin0" className="buttonClass" ref={this.vehiclesRef}/>
      <Link key={9} to="/autoquote/select-accidents" className="buttonClass" ref={this.resumeRef}/>
      
      </>
    )
  }
}

export default App;