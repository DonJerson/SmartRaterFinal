
  class Elements{
  
      constructor(){
          this.brands=['AC', 'Acura', 'Arola', 'Aixam', 'Mega', 'Alfa Romeo', 'Alpine', 'Alpine-Renault', 
          'Alvis', 'AMC', 'Renault', 'Eagle', 'Anadol', 'Ariel', 'ARO', 'Artega', 'Asia', 
          'Aston Martin', 'Lagonda', 'Audi', 'Autobianchi', 'DKW', 'Auto-Union', 'Auverland',
           'Bentley', 'Bitter', 'BMW', 'Bond', 'Lloyd', 'Borgward', 'Goliath', 'Bristol', 
           'Austin', 'Morris', 'Riley', 'Wolseley', 'MG', 'Vanden Plas', 'Princess',
           'Austin-Healey', 'Mini', 'Rover', 'Bugatti', 'Buick', 'Cadillac', 'Caterham', 
           'Checker', 'Chevrolet', 'Chrysler', 'Imperial', 'Talbot', 'Simca', 'Citro', 'DS'
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
              'Vauxhall', 'Venturi', 'Volkswagen', 'Westfield', 'Wiesmann', 'Zastava', 'ZAZ', 'Zil'];
             
              this.listOfAutoQuoteSteps=[
                {path:"select-vehicle-vin",attributeSet:['vin'],label:"What is the VIN of the vehicle?",name:"vin",group:"default"},
                {path:"select-year",attributeSet:['year'],label:"What Is The Vehicle Year?",name:'year',group:"default"},
                {path:"select-brand",attributeSet:['brand'],label:"What Is The Brand?",name:"brand",group:"default"},
                {path:"select-model",attributeSet:['model'],label:"What Is The Model?",name:"model",group:"default"},
                {path:"select-additionalVehicles",attributeSet:['additionalVehicles'],label:"Do You Have Any Additional Vehicles?",name:"vehicleAmount",group:"default"},
                {path:"select-accidents",name:'accident',attributeSet:['accidents'],label:"Have You Had Any Accidents In The Last 5 Years?",group:"default"},
                {path:"select-insurance",attributeSet:['insurance'],label:"Do You Currently Have Insurance?",name:'insured',group:"default"},
                {path:"select-dui",attributeSet:['dui'],label:"Do You Have A DUI?",name:"dui",group:"default"},
                {path:"select-military",attributeSet:['military'],label:"Are You A Military Person?",name:"military",group:"default"},
                {path:"select-married",attributeSet:['married'],label:"Are You Married?",name:"married",group:"default"},
                {path:"select-homeowner",name:"homeowner",attributeSet:['homeOwner'],label:"Do You Have A Homeowner Policy?",group:"default"},
                {path:"select-name",attributeSet:['firstName','middleName','lastName'],label:"What Is Your Name?",name:"name",group:"default"},
                {path:"select-dob",name:"dob",attributeSet:['dob'],label:"What Is Your Date Of Birth?",group:"default"},
                {path:"select-address",name:"address",attributeSet:['address1','address2','city','state','zipcode'],label:"What Is Your Address?",group:"default"},
                {path:"select-emailAddress",name:"email",attributeSet:['email'],label:"What Is Your Email Address?",group:"default"},
                {path:"select-phoneNumber",name:"phoneNumber",attributeSet:['phoneNumber'],label:"What Is Your Phone Number?",group:"default"},
                {path:"select-additionalDrivers",attributeSet:['additionalDrivers'],label:"Would You Like to Add Any Additional Drivers?",name:"driverAmount",group:"default"},
                // {path:"select-vin",name:"vin",attributeSet:['vin],label:"Please Type in The VIN For The Vehicle",group:"vehicle"},
                // {path:"select-year",attributeSet:['year],label:"What Is The Car's Year?",name:'year',group:"vehicle"},
                // {path:"select-make",name:"make",attributeSet:['make],label:"What Is The Car's Brand?",group:"vehicle"},
                // {path:"select-model",name:"model",attributeSet:['model],label:"What Is The Car's Model?",group:"vehicle"},
                // {path:"select-driver-name",name:"driverName",attributeSet:['firstName','middleName','lastName'],label:"What Is The Driver's Name?",group:"driver"},
                // {path:"select-driver-dob",name:"driverDob",attributeSet:['driverDob'],label:"What Is The Driver's Date Of Birth?",group:"driver"},
                // {path:"select-driver-phoneNumber",name:"driverPhoneNumber",attributeSet:['driverPhoneNumber'],label:"What Is The Driver's Phone Number?",group:"driver"},
                // {path:"select-driver-emailAddress",name:"driverEmailAddress",attributeSet:['driverEmailAddress'],label:"What Is The Driver's Email Address?",group:"driver"},
                // {path:"select-driver-licenseNumber",name:"driverLicenseNumber",attributeSet:['driverLicenseNumber'],label:"What Is The Driver's License Number?",group:"driver"}
              ]
              this.listOfAutoQuoteNames = []
              this.listOfAutoQuoteSteps.forEach(step=>{
                this.listOfAutoQuoteNames.push(step.name)
              })
              this.listOfAutoQuotePaths =[]
               this.listOfAutoQuoteSteps.forEach(step=>{
                this.listOfAutoQuotePaths.push(step.path)
              })
              this.listOfAutoQuoteLabels =[]
               this.listOfAutoQuoteSteps.forEach(step=>{
                this.listOfAutoQuoteLabels.push(step.label)
              })
              this.listOfAutoQuoteAttributeSets =[]
                this.listOfAutoQuoteSteps.forEach(step=>{
                this.listOfAutoQuoteAttributeSets=this.listOfAutoQuoteAttributeSets.concat(step.attributeSet)
              })

              //Home

              this.listOfHomeQuoteSteps=[
                  
              ]




              //Commercial
              //Business
              //Life
              //Health




  
              this.newQuote=    {
                "id": 9999,
                "businessType": "PA",
                "quoteId": "3862a76e-0024-4dc6-9367-e36a9b459b37",
                "status": "Quoted",
                "quoteType": "Auto",
                "quote_date": "2022-01-26T22:53:28.211929Z",
                "updated_at": "2022-01-26T22:53:28.211989Z",
                "pendingReview": true,
                "agency": 3,
                "customer": 2,
                "lines":[]
            }
              //     this.listOfCommercialQuoteSteps=[
            //       {path:"select-businessName",labez  l:"What Is The Business Name?",component:SelectBusinessName},
            //       {path:"select-legalEntityType",label:"What Type Of Legal Entity Are You?",component:SelectLegalEntityType
            //     ,options:["Sole Propietorship","Partnership","LLC","C Corporation","S Corporation","Other"]},
            //       {path:"select-businessAddress",label:"What Is The Business Address?",component:SelectBusinessAddress},
            //       {path:"select-businessDesciption",label:"What Is The Business Description?",component:SelectBusinessDescription},
            //       {path:"select-businessExperience",label:"Years In Business",component:SelectBusinessExperience
            //     ,options:['Less than a Year', '1-3 Years', '3-5 Years', '5-10 Years', '10+ Years']},
            //     {path:"select-businessEmployees",label:"How Many Full-time Employees Do You Have?",component:SelectBusinessEmployees},
            //     {path:"select-businessEmployeesPartTime",label:"How Many Part-time Employees Do You Have?",component:SelectBusinessEmployeesPartTime},
            //     {path:"select-businessAnnualRevenue",label:"What Is The Annual Revenue?",component:SelectBusinessAnnualRevenue,
            //   options:['Under $100,000','$100,000 - $500,000','$500,000 - $1,000,000','$1,000,000 - $5,000,000','$5,000,000 - $10,000,000',
            //   'Over $10,000,000']},
            //   {path:"select-businessAnnualPayroll",label:"What Is The Annual Payroll?",component:SelectBusinessAnnualPayroll,
            //   options:['Under $50,000','$50,000 - $100,000','$100,000 - $250,000','$250,000 - $500,000',
            //   'Over $500,000']},
            //   {path:"select-coverageType",label:"What Type Of Coverage Are You Interested In?",component:SelectCoverageType,
            //   options:["General Liability","Commercial Auto","Commercial Property","Professional Liability (E&O)","Directors And Officers Liability",
            //   "Business Owners Package Policy","Workers Compensation","Other"]},
            //   {path:"select-coverageAmount",label:"What Is The Coverage Amount?",component:SelectCoverageAmount,
            //   options:['Under $100,000','$100,000 - $500,000','$500,000 - $1,000,000','$1,000,000 - $5,000,000','$5,000,000 - $10,000,000']},
            //   {path:"select-businessOwnerName",label:"What Is The Business Owner's Name?",component:SelectBusinessOwnerName},
            //   {path:"select-businessOwnerEmail",label:"What Is The Business Owner's Email?",component:SelectBusinessOwnerEmail},
            //   {path:"select-businessOwnerPhone",label:"What Is The Business Owner's Phone Number?",component:SelectBusinessOwnerPhone},
            
            //   ]
                  
            //     const listOfHomeQuoteSteps=[{path:"select-typeProperty",label:"What Is The Type Of Property",
            //     component:SelectTypeProperty,options:userPack.data.typesOfProperty},
            //     {path:"select-age",label:"How Old Is The Property",component:SelectAge,options:["New","5 Years","10 Years","20 Years"
            //     ,"30 Years", "Over 40 Years"]},
            //     {path:"select-squareFeet",label:"How Many Square Foots",component:SelectSquareFeet,options:["1,000 or less","1,000 - 2,000",
            //     "2,000 - 3,000","3,000 - 4,000","4,000 - 5,000","5,000+"]},
            //     {path:"select-stories",label:"How Many Stories",component:SelectStories,options:["1","2","3","4","5 or more"]},
            //     {path:"select-insured",label:"Is The Property Insured",component:SelectInsured,options:["Yes","No"]},
            //     {path:"select-ownerNames",label:"What Is The Your Name",component:SelectOwnerNames},
            //     {path:"select-ownerEmailAddress",label:"What Is The Your Email Address",component:SelectOwnerEmailAddress},
            //     {path:"select-ownerDateOfBirth",label:"What Is Your Date Of Birth",component:SelectOwnerDateOfBirth},
            //     {path:"select-ownerPhoneNumber",label:"What Is Your Phone Number",component:SelectOwnerPhoneNumber},
            //     {path:"select-propertyAddress",label:"What Is The Property Address",component:SelectPropertyAddress},
            //     {path:"results",label:"Your Quote",component:Results}]
            //     const listOfHealthQuoteSteps=[{path:"select-dateOfBirth",label:"What Is Your Date Of Birth",component:SelectDateOfBirth},
            //     {path:"select-maleOrFemale",label:"Are You Male or Female"},
            //     {path:"select-address",label:"What Is The Property Address",component:SelectAddress},
            //     {path:"select-married",label:"Are You Married?",component:SelectAutoMarried},
            //     {path:"select-children",label:"Do You Have Children?",component:SelectAutoChildren},
            //     {path:"select-childrenAmount",label:"How Many Children Do You Have?",component:SelectAutoChildrenAmount},
            //     {path:"select-tobacco",label:"Do You Smoke?",component:SelectAutoTobacco},
            //     {path:"select-lastSixtyDays",label:"Did Any of These Happened in The Last 60 Days?",component:SelectLastSixtyDays
            //     ,options:["I Lost My Coverage","I Moved to Another State","I Changed My Family Size","None of These Apply"
            //   ]},
            //   {path:"select-name",label:"What Is Your Name",component:SelectName},
            //   {path:"select-emailAddress",label:"What Is Your Email Address",component:SelectEmailAddress},
            //   {path:"select-phoneNumber",label:"What Is Your Phone Number",component:SelectPhoneNumber},
            //     ]
            //     const listOfMedicareQuoteSteps=[{path:"select-dateOfBirth",label:"What Is Your Date Of Birth",component:SelectDateOfBirth},
            //     {path:"select-maleOrFemale",label:"Are You Male or Female"},
            //   {path:"select-name",label:"What Is Your Name",component:SelectName},
            //   {path:"select-address",label:"What Is The Property Address",component:SelectAddress},
            //   {path:"select-emailAddress",label:"What Is Your Email Address",component:SelectEmailAddress},
            //   {path:"select-phoneNumber",label:"What Is Your Phone Number",component:SelectPhoneNumber},
            //     ]
            //     const listOfLifeQuoteSteps=[{path:"select-dateOfBirth",label:"What Is Your Date Of Birth",component:SelectDateOfBirth},
            //     {path:"select-married",label:"Are You married",component:SelectMarried,options:["Yes","No"]},
            //     {path:"select-height",label:"How Tall Are You"},
            //     {path:"select-weight",label:"How Much Do You Weigh"},
            //     {path:"select-smoker",label:"Do You Smoke"},
            //     {path:"select-drinker",label:"Do You Drink"},
            //     {path:"select-healthConditions",label:"Do You Have Any Health Conditions"},
            //     {path:"select-coverage",label:"What Coverage Are You Interesed In",options:['Term 1 Year','Tearm 5 Years','Term 10 Years','Term 20 Years',
            //     'Term 25 Years','Term 30 Years','Whole Life','Universal Life','Variable Life','Ivestment','Not Sure']},
            //     {path:"select-coverage",label:"What Coverage Are You Interesed In",component:SelectCoverage,options:['$50,000',
            //     '$75,000','$100,000','$150,000','$200,000','$250,000','$300,000','$400,000','$500,000','$750,000','$1,000,000',
            //     '$1,500,000','$2,000,000']},
            //     {path:"select-name",label:"What Is Your Name",component:SelectName},
            //     {path:"select-emailAddress",label:"What Is Your Email Address",component:SelectEmailAddress},
            //     {path:"select-phoneNumber",label:"What Is Your Phone Number",component:SelectPhoneNumber},
            //     {path:"select-address",label:"What Is The Property Address",component:SelectAddress},
            //     {path:"select-maleOrFemale",label:"Are You Male or Female"},
            // ]
      }

}

export default Elements;