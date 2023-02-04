import axios from "axios"
import React from "react"
import MaterialInput from "../../elements/inputs/MaterialInput"
import ExportAsJSON from "../../scripts/exportCsv"

import Toggle from "./Toggle"
import { Readable } from 'stream';
import * as XLSX from 'xlsx/xlsx.mjs';
import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
/* load 'fs' for readFile and writeFile support */
import * as fs from 'fs';
XLSX.set_fs(fs);

/* load 'stream' for stream support */

XLSX.stream.set_readable(Readable);

/* load the codepage support library for extended support with older formats  */

XLSX.set_cptable(cpexcel);


let framesiding=['Frame - Stucco','Frame','Aluminum Siding','Vinyl Siding','Wood Siding','Logs','Hardiplank Siding','Brick Veneer','Stone Veneer'
]
let masonrysiding=['Concrete Block - Stucco','Concrete Block','Solid Brick','Solid Stone','Superior'
]
let wallConstruction=["Masonry", "Frame - Stucco", "Aluminum Siding", "Vinyl Siding", "Wood Siding", "Masonry Veneer", "Brick Veneer", "Stone Veneer", "Logs", "Asbestos"]


export default function Teteo(props) {
    const [lead, setClient] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        address2: "",
        prior:true,
        new:false,
        married:false,
        mortgage:true,
        inspections:false,
        primary:true,
        claims:false,
        damage:false,
        centralHeat:true,
        roofMaterial:"Composite Shingle",
        beds:2,
        baths:2,
        usage:"Primary",
        wallType:"Masonry",
        wallMaterial:"Concrete Block - Stucco",
            roofType:"Composite Shingle",
            roofShape:"Gable",
            wallFrame:"Frame - Stucco",
            wallMasonry:"Concrete Block - Stucco",
            wallConstruction:"Masonry",
        foundationShape:"4-5 Corners - Square/Rectangle",
        plumbingType:"PVC",
        floor:1,
        stories:1,
            families:1,
            foundationType:"Slab",
        pool:"None",
        structureType:"Single Family",
        occupancy:"9 months or more",
        coverageB:'2%',
        coverageC:'25%',
            coverageD:'10%',
            medical:'$5000',
            aop:"$2500",
            hurricane:"2%",
            lossAssessment:"$0",
      })
      const textChange=(e)=>{
        let neoLead = {...lead}
        neoLead[e.target.name] = e.target.value
        setClient(neoLead)
      }
      const onChange = (event) => {
        let e = event.target
        //get element tag
        let tag = e.tagName
        //if tag is select
        if(tag==="SELECT"){
          setClient({ ...lead, [event.target.name]: e[e.selectedIndex].textContent })
          return
        }
        setClient({ ...lead, [event.target.name]: event.target.value })
      }
    
      const save=()=>{


            axios.post('http://10.0.0.229:8081/newProspect/',
            lead)
            .then(res=>{
                  console.log(res)

            })
}
const getCounty=()=>{
      axios.get('http://uscounties.com/zipcodes/search.pl?query='+lead.zipcode+'&stpos=0&stype=AND')
      
      .then(res=>{
            let county = res.data.split("County: ")[1].split("")[0]

            let neoLead = {...lead}
            neoLead.county=county
            setClient(neoLead)
      })

}
const scrapeAddress=()=>{
}
async function saveFile(string,fileName){
      
      let blob = new Blob([string], {type: "text/plain;charset=utf-8"}); 

      let a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";

      let url =window.URL.createObjectURL(blob)
      a.href=url
      a.download=fileName
      a.click()
      window.URL.revokeObjectURL(url)
}

async function download(){
    
      //let csv = Export(lead)
      //if lead primary, set mailing address to address

      lead.mailingAddress = lead.address
      lead.mailingCity = lead.city
      lead.mailingState = lead.state
      lead.mailingZipcode= lead.zipcode
      lead.mailingCounty= lead.county
     
      let matchedLead = [ExportAsJSON(lead)]
      const worksheet = XLSX.utils.json_to_sheet(matchedLead);
      let name = 'No name'
      if(lead.first_name||lead.last_name){
            name = lead.first_name+" "+lead.last_name
      }
     
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "Lead "+name+".xlsx");
}
const print=()=>{
      let neoLead = {...lead}
      delete neoLead['json']
      neoLead['json'] = JSON.stringify(neoLead)+'\n\n'
      setClient(neoLead)
}
const inject=()=>{
      try {
            
   
      let json = lead.json

      //remove all /n
      json = json.replace(/(\r\n|\n|\r)/gm, " ").replace(/\//g, " ")
      //string to json
      json = JSON.parse(json)
      let neoLead = {...lead}
      //for all keys in json, change neoLead value
      for(let key in json){
            neoLead[key] = json[key]
      }
      //set new lead
      setClient(neoLead)


} catch (error) {
      console.log(error)
}
}
    const setCoverageA=(e)=>{
      let neoLead = {...lead}
      //get target innerText
      let text = e.target.innerText
      let coverageA
      if(text=="Economy"){
            coverageA=neoLead.area*125   
      }
      if(text=="Standard"){
            coverageA=neoLead.area*145}
      if(text=="Above average"){
            coverageA=neoLead.area*165}
      if(text=="Premium"){
            coverageA=neoLead.area*175}
            if(text=="Custom"){
            coverageA=neoLead.area*195}

      neoLead['coverageA'] =coverageA.toString()
      setClient(neoLead)
    }
    const labelize=(list)=>{
      let neoList = []
      list.map((c,index)=>{
        neoList.push({label:c,value:c})
      })
      return neoList
    }

  return (
<>
<form style={{padding:"20px",}}>
<div className="myRow center" style={{gap:16,marginBottom:"20px"}}>
    <p className='link' >Get A Free Quote</p>   
    </div>
    <div className="myRow" style={{gap:8}}>
    <MaterialInput value={lead.first_name} onChange={onChange} name='first_name'
    label="First Name" type="text"/>

    <MaterialInput label="Middle" onChange={onChange}  value={lead.middle_name} 
    type="text" name='middle_name'/>
   
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
     <MaterialInput value={lead.last_name} onChange={onChange}
     label="Last Name" type="text" name='last_name'/>
     <div style={{}} className="myRow center">
     <MaterialInput value={lead.dob} onChange={onChange}
     label="Date of Birth" type="date" name='dob'/>
      <MaterialInput label="Gender" onChange={onChange} options={labelize(['Male','Female'
      ])} value={lead.gender} type='select' name='gender'/>
     </div>
   
     </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    
    <MaterialInput label="Phone" type="text" name='phone' value={lead.phone} 
     onChange={onChange}/>
         <MaterialInput label="Email" type="text" name='email' value={lead.email} 
     onChange={onChange}/>
    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput value={lead.address} onChange={onChange} name='address'
    label="Address" type="text"/>

    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="Address2" onChange={onChange}  value={lead.address2} 
    type="text" name='address2'/>
       </div>
       <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="City" onChange={onChange}  value={lead.city} 
    type="text" name='city'/>
        <MaterialInput label="State" onChange={onChange}  value={lead.state} 
    type="text" name='state'/>
       
       </div>
       <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
       <MaterialInput label="Zipcode" onChange={onChange}  value={lead.zipcode} 
    type="text" name='zipcode'/>
         <MaterialInput label="County" onChange={onChange}  value={lead.county} 
    type="text" name='county'/>
    </div>
    <div className="myRow center" style={{gap:16,marginTop:"10px"}}>
    <p className='link' onClick={getCounty} >Get County</p>    <p className='link' onClick={scrapeAddress}>Scrape Address</p>  
    </div>
    <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Type" onChange={onChange} options={labelize(['HO3','HO4','HO5','HO6','HO8','DP1','DP2','DP3','Flood','Auto','Umbrella','Life','Health','Other'
      ])} value={lead.policyType} type='select' name='policyType'/>
            <MaterialInput label="Occupancy" onChange={onChange} options={labelize(['9 months or more','4 - 8 months','0 - 3 months','Vacant'
      ])} value={lead.occupancy} type='select' name='occupancy'/>

<MaterialInput label="Usage" onChange={onChange} options={labelize(['Primary','Secondary','Seasonal','Rental','Vacant'
      ])} value={lead.usage} type='select' name='usage'/>

        </div>
        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <MaterialInput label="Structure Type" onChange={onChange} options={labelize(['Single Family','Condo','Townhouse (End Unit)','Townhouse (Center Unit)','Rowhouse(End Unit)',
,'Rowhouse(Center Unit)','Duplex','Triplex','Quadruplex'
      ])} value={lead.structureType} type='select' name='structureType'/>

        <MaterialInput label="Wall Type" onChange={onChange} options={labelize(['Masonry','Frame','Mobile Home','Mixed Masonry-Frame','Other'
])} value={lead.wallType} type='select' name='wallType'/>


{lead.wallType=="Mixed Masonry-Frame"?
<>
<MaterialInput label="Wall Construction" onChange={onChange} options={labelize([
'Masonry 50% - Frame 50%','Masonry 75% - Frame 25%','Masonry 67% - Frame 33%'
])} value={lead.wallConstruction} type='select' name='wallConstruction'/>
<MaterialInput label="Masonry Construction" onChange={onChange} options={labelize(masonrysiding)} value={lead.wallMasonry} type='select' name='wallMasonry'/>
<MaterialInput label="Frame Construction" onChange={onChange} options={labelize(framesiding)} value={lead.wallFrame} type='select' name='wallFrame'/>
</>
:
<MaterialInput label="Wall Material" onChange={onChange} options={labelize(lead.wallType==='Masonry'?masonrysiding:lead.wallType==='Frame'?framesiding:[])} value={lead.wallMaterial} type='select' name='wallMaterial'/>
}

</div>


        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label="Foundation" onChange={onChange} options={labelize(['4-5 Corners - Square/Rectangle','6-7 Corners - L Shape','8-10 Corners - T,U,Z Shape','11-12 Corners - H or Custom Shape','13+ Corners - Irregular/Complex'
])} value={lead.foundationShape} type='select' name='foundationShape'/>

<MaterialInput label="Type" onChange={onChange} options={labelize(['Slab','Basement','Crawlspace','Piers','Other'
])} value={lead.foundationType} type='select' name='foundationType'/>

<MaterialInput label="Foundation Material" onChange={onChange} options={labelize(['Concrete','Block','Wood','Other'
])} value={lead.foundationMaterial} type='select' name='foundationMaterial'/>

</div>
<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label="Beds" onChange={onChange} options={labelize(['1','2','3','4','5','6','7','8','9','10'
      ])} value={lead.beds} type='select' name='beds'/>
            <MaterialInput label="Baths" onChange={onChange} options={labelize(['1','1.5','2','2.5','3','3.5','4','4.5','5','5.5','6','6.5','7','7.5','8','8.5','9','9.5','10'
      ])} value={lead.baths} type='select' name='baths'/>
           <MaterialInput label="Pool" onChange={onChange} options={labelize(['None','Inground - 300 - 600 sq. ft.',
'Inground - large > 600 sq. ft.',
'Inground - 300 - 600 sq. ft. - Detached',
'Inground - large > 600 sq. ft. - Detached',
'Above Ground - Detached'
      ])} value={lead.pool} type='select' name='pool'/>
</div>

<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label="Roof Year" onChange={onChange}  value={lead.roofYear} 
    type="text" name='roofYear'/>
<MaterialInput label="Roof" onChange={onChange} options={labelize(['Gable','Hip','Flat','N/A'
      ])} value={lead.roofShape} type='select' name='roofShape'/>

<MaterialInput label="Roof Material" onChange={onChange} options={labelize(['Asphalt Shingle','Architectural Shingle','Composite Shingle','Tile-Concrete','Tile','Metal','Rolled Roof','Concrete','Other'
      ])} value={lead.roofMaterial} type='select' name='roofMaterial'/>
</div>
<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Year Built" onChange={onChange}  value={lead.year} 
    type="text" name='year'/>
            <MaterialInput label="Living area (Sq Ft)" onChange={onChange}  value={lead.area} 
    type="text" name='area'/>
<MaterialInput label="Plumbing Type" onChange={onChange} options={labelize(['PVC','Galvanized','Copper','Polybutylene','PEX'
      ])} value={lead.plumbingType} type='select' name='plumbingType'/>
        </div>

        {lead.structureType==='Condo'?
<>
<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label="Units in Building" onChange={onChange}
     value={lead.units} type='text' name='units'/>
<MaterialInput label="Unit Floor" onChange={onChange}
     value={lead.floor} type='text' name='floor'/>
</div> 
</>
:
<></>}

        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>

            <MaterialInput label="Water Heater" onChange={onChange}  value={lead.waterheater} 
    type="text" name='waterheater'/>
          <MaterialInput label="Stories" onChange={onChange}
     value={lead.stories} type='text' name='stories'/>
               <MaterialInput label="Families" onChange={onChange}
     value={lead.families} type='text' name='families'/>
        </div>


        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <MaterialInput label="Purchase Price" onChange={onChange}  value={lead.purchasePrice} 
    type="text" name='purchasePrice'/>  
            <MaterialInput label="Purchase Date" onChange={onChange}  value={lead.purchaseDate} 
    type="date" name='purchaseDate'/>  
        <MaterialInput label="Effective Date" onChange={onChange}  value={lead.effective} 
    type="date" name='effective'/>  

    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>Coverages</p> <p onClick={setCoverageA} style={{color:"blue"}} className='link'>Economy</p><p onClick={setCoverageA} style={{color:"blue"}} className='link'>Standard</p><p onClick={setCoverageA} style={{color:"blue"}} className='link'>Above average</p> <p onClick={setCoverageA} style={{color:"blue"}} className='link'>Premium</p>
<p onClick={setCoverageA} style={{color:"blue"}} className='link'>Custom</p>
</div>
    <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <MaterialInput label="Coverage A" onChange={onChange}  value={lead.coverageA} 
    type="text" name='coverageA'/> 
    {/*
    replace %


    */}
    
    
<MaterialInput label={"Coverage B ("+((parseInt(lead.coverageB.replace(
      '%', ''))/100)*lead.coverageA).toFixed(0) +")"} 
onChange={onChange} options={labelize(['0%','1%','2%','5%','10%','15%','20%'
      ])} value={lead.coverageB} type='select' name='coverageB'/>


      <MaterialInput label={"Coverage C ("+((parseInt(lead.coverageC.replace(
      '%', ''))/100)*lead.coverageA).toFixed(0) +")"} 
      onChange={onChange} options={labelize(['0%','25%','30%','35%','40%','45%','50%','55%','60%','65%','70%','75%'
      ])} value={lead.coverageC} 
      type='select' name='coverageC'/>

</div>
<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label={"Coverage D ("+((parseInt(lead.coverageD.replace(
      '%', ''))/100)*lead.coverageA).toFixed(0) +")"} 
onChange={onChange} options={labelize(['0%','5%','10%','20%','25%','30%'])} value={lead.coverageD} type='select' name='coverageD'/>

      <MaterialInput label="Coverage E" onChange={onChange} options={labelize(['$100,000','$200,000','$300,000','$400,000','$500,000','$600,000','$700,000','$800,000','$900,000','$1,000,000'
      ])} value={lead.coverageE} type='select' name='coverageE'/>

      <MaterialInput label="Medical" onChange={onChange} options={labelize(['$0','$1000','$2000','$3000','$4000','$5000'
      ])} value={lead.medical} type='select' name='medical'/>

</div>
<div className="myRow center" style={{gap:8,marginTop:"10px"}}>
<MaterialInput label="Hurricane Deductible" onChange={onChange} options={labelize(['500','1000','2%','5%','10%'
      ])} value={lead.hurricane} type='select' name='hurricane'/>
      <MaterialInput label="AOP" onChange={onChange} options={labelize(['$500','$1000','$2500','$5000'
      ])} value={lead.aop} type='select' name='aop'/>
      <MaterialInput label="Loss Assessment" onChange={onChange} options={labelize(['$0','$1000','$2000','$3000','$4000','$5000','$6000','$7000','$8000','$9000','$10000'
      ])} value={lead.lossAssessment} type='select' name='lossAssessment'/>
</div>
       <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        <div>Prior Insurance</div>
     <Toggle function={setClient} name="prior" lead= {lead} />
      <div>Mortgage</div>
      <Toggle function={setClient} name="mortgage" lead= {lead}/> 


      </div>
      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
      <div>New Purchase</div>
       <Toggle function={setClient} name="new" lead= {lead}/><div>Married</div>
       <Toggle function={setClient} name="married" lead= {lead}/></div>
      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
      <div>Inspections</div>
       <Toggle function={setClient} name="inspections" lead= {lead}/>
        <div>Primary</div>
       <Toggle function={setClient} name='primary' lead= {lead}/>


      </div>
      <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
        <div>Claims</div>
         <Toggle function={setClient} name="claims" lead= {lead}/>
          <div>Existing Damage</div>
         <Toggle function={setClient} name='damage' lead= {lead}/>
  
  
        </div>

        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
        <div>24/7 Monitored Fire Alarm</div>
         <Toggle function={setClient} name="fire" lead= {lead}/>
          <div>24/7 Monitored Burglar Alarm</div>
         <Toggle function={setClient} name='burglar' lead= {lead}/>
  
  
        </div>
        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
        <div>Gated Community</div>
         <Toggle function={setClient} name="gated" lead= {lead}/>
          <div>Central Heat & Air</div>
         <Toggle function={setClient} name='centralHeat' lead= {lead}/>
  
  
        </div>

        <div className="myRow center" style={{gap:8,marginTop:"10px"}}>
        
        <div>Fenced</div>
         <Toggle function={setClient} name="fence" lead= {lead}/>
          <div>Screening</div>
         <Toggle function={setClient} name='screening' lead= {lead}/>
  
  
        </div>
        {lead.wallType=='Mobile Home'?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Manufacturer" onChange={onChange}  value={lead.manufacturer} 
      type="text" name='manufacturer'/>   
            <MaterialInput label="Serial Number" onChange={onChange}  value={lead.serial} 
      type="text" name='serial'/>   
              <div>Approved Park</div>
     <Toggle function={setClient} name="park" lead= {lead} />
      </div>
     
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Make" onChange={onChange}  value={lead.make} 
      type="text" name='make'/>   
            <MaterialInput label="Model" onChange={onChange}  value={lead.model} 
      type="text" name='model'/>   
              <div>Subdivision</div>
     <Toggle function={setClient} name="subdivision" lead= {lead} />
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Length" onChange={onChange}  value={lead.length} 
      type="text" name='length'/>   
            <MaterialInput label="Width" onChange={onChange}  value={lead.width} 
      type="text" name='width'/>  
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
 
      </div>
      </>
:
<></>}


      {lead.married?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="CoApplicant First Name" onChange={onChange}  value={lead.cofirst_name} 
      type="text" name='cofirst_name'/>   
            <MaterialInput label="CoApplicant Last Name" onChange={onChange}  value={lead.cofirst_name} 
      type="text" name='cofirst_name'/>   
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="CoApplicant date of birth" onChange={onChange}  value={lead.codob} 
      type="date" name='codob'/>   
      </div>
      </>
:
<></>}

{lead.mortgage?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Mortgagee clause" onChange={onChange}  value={lead.mortgagee} 
      type="text" name='mortgagee'/>   
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Loan number" onChange={onChange}  value={lead.loan} 
      type="text" name='loan'/>   
      </div>
      </>
:
<></>}

{lead.new?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>Prior Address</p>
 </div>
 <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput value={lead.priorAddress} onChange={onChange} name='priorAddress'
    label="Address" type="text"/>

    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="Address2" onChange={onChange}  value={lead.priorAddress2} 
    type="text" name='priorAddress2'/>
       </div>
       <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="City" onChange={onChange}  value={lead.priorCity} 
    type="text" name='priorCity'/>
        <MaterialInput label="State" onChange={onChange}  value={lead.priorState} 
    type="text" name='priorState'/>
        <MaterialInput label="Zipcode" onChange={onChange}  value={lead.priorZipcode} 
    type="text" name='priorZipcode'/>
       </div>
      </>
:
<></>}

{!lead.primary?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>Mailing Address</p>
 </div>
 <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput value={lead.mailingAddress} onChange={onChange} name='mailingAddress'
    label="Address" type="text"/>

    </div>
    <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="Address2" onChange={onChange}  value={lead.mailingAddress2} 
    type="text" name='mailingAddress2'/>
       </div>
       <div className="myRow" style={{gap:8,marginTop:"10px"}}>
    <MaterialInput label="City" onChange={onChange}  value={lead.mailingCity} 
    type="text" name='mailingCity'/>
        <MaterialInput label="State" onChange={onChange}  value={lead.mailingState} 
    type="text" name='mailingState'/>
        <MaterialInput label="Zipcode" onChange={onChange}  value={lead.mailingZipcode} 
    type="text" name='mailingZipcode'/>
       </div>
      </>
:
<></>}

{lead.prior?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Carrier" onChange={onChange}  value={lead.carrier} 
      type="text" name='carrier'/>   
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
      <MaterialInput label="Policy number" onChange={onChange}  value={lead.policy} 
      type="text" name='policy'/>   
            <MaterialInput label="Expiration date" onChange={onChange}  value={lead.priorexp}
      type="date" name='priorexp'/>
      </div>
      </>
:
<></>}


{lead.inspections?
<>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>Inspections</p>
</div>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
    
            <MaterialInput label="Roof Covering" onChange={onChange}
             options={labelize(['Meets FBC 2001','Meets FBC 1994','Reinf Concrete Roof Deck','Non-FBC'
      ])} value={lead.roofCovering} type='select' name='roofCovering'/>
      <MaterialInput label="Roof Deck" onChange={onChange}  value={lead.roofDeck}
       options={labelize(['Unknown','Level A','Level B','Level C','Metal Deck - Type II or III','Wood Deck - Type II only'
       ])} type='select' name='roofDeck'/> 
             <MaterialInput label="Roof Wall" onChange={onChange}  value={lead.rooWall}
       options={labelize(['Unknown','Toe Nails','Clips','Single Wraps',
       'Double Wraps','N/A','Structural',
       ])} type='select' name='rooWall'/> 
      </div>
      <div className="myRow" style={{gap:8,marginTop:"10px"}}>
                  <MaterialInput label="SWR" onChange={onChange}  value={lead.swr} 
                  options={labelize(['No','Yes'])}
      type="select" name='swr'/>   
                        <MaterialInput label="Opening Protection" onChange={onChange}  value={lead.opening} 
                        options={labelize(['Unknown or None','Basic','Hurricane Protection'
                        ])}
      type="select" name='opening'/>
                              <MaterialInput label="Date Inspected" onChange={onChange}  value={lead.inspectionDate} 
      type="date" name='inspectionDate'/></div>
            <div className="myRow" style={{gap:8,marginTop:"10px"}}>
                                    <MaterialInput label="Inspector" onChange={onChange}  value={lead.inspectionName} 
      type="text" name='inspectorName'/>
                                         <MaterialInput label="License" onChange={onChange}  value={lead.inspectorNumber} 
      type="text" name='inspectorNumber'/>
                                               <MaterialInput label="Number" onChange={onChange}  value={lead.inspectorPhone} 
      type="text" name='inspectorPhone'/>
                                                     <MaterialInput label="Company" onChange={onChange}  value={lead.inspectionCompany} 
      type="text" name='inspectionCompany'/>

      </div>
      </>
:
<></>}


<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>Comments</p>
</div>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<textarea style={{width:"100%",height:"180px"}}  rows="400"
onChange={textChange} name='comments' value={lead.comments}
>

</textarea>
</div>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<p>JSON Box</p>
</div>
<div className="myRow" style={{gap:8,marginTop:"10px"}}>
<textarea style={{width:"100%",height:"180px"}}  rows="400"
onChange={textChange} name='json' value={lead.json}
>

</textarea>
 </div>
 <div className="myRow center" style={{paddingTop:"15px"}}>
<div className="quoteLine" style={{display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
    <div className="CallButton link" style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(176.37, 176.37, 176.37, 1)', boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.40)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Cancel" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Cancel</p>
    </div>
    <div style={{width: 48,}}/>
    <div className="CallButton link" onClick={save} style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 2px 2px rgba(54, 157, 139, 1)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Save" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Save</p>

    </div>


        

</div>
</div>
<div className="myRow center" style={{paddingTop:"15px"}}>
<div className="quoteLine" style={{display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
    <div className="CallButton link" onClick={download}
    style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.40)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Cancel" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Download CSV</p>
    </div>
    <div style={{width: 48,}}/>
    <div className="CallButton link" onClick={print}
    style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.40)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Cancel" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Print</p>
    </div>
    <div style={{width: 48,}}/>

    <div className="CallButton link link" onClick={inject} style={{height: 24, paddingLeft: 11, paddingRight: 11, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgba(15, 188, 157, 1)', boxShadow: '0px 2px 2px rgba(54, 157, 139, 1)', borderRadius: 4, display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        <p className="Save" style={{fontSize: 16, fontWeight: '700', lineHeight: '100%', textAlign: 'center', color: 'white',}}>Inject</p>
        
    </div>

</div>
</div>
 </form>


</>
  )
}