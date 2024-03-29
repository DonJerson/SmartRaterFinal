//get today's date in year-month-day format
const XLSX = require('xlsx')
const today = new Date();
const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

const defaultDob= "01/01/1978";

   //turn 2022-12-15 into 12/15/2022
const convertDate = (date) => {
    try {
        const exp = date.split("-");
        return exp[1]+'/'+exp[2]+'/'+exp[0];
    } catch (error) {
        return date
    }
   
}

let keysMatch = [
    {"QR":"NameFirst","local":"first_name"},
    {"QR":"NameLast","local":"last_name"},
    {"QR":"DateOfBirth","local":"dob","default":defaultDob},
    {"QR":"MaritalStatus","local":"married"},
    {"QR":"PhonePrimary","local":"phone"},
    {"QR":"PhoneCell","local":"phone"},
    {"QR":"Email","local":"email"},
    {"QR":"NewPurchase","local":"new"},
    {"QR":"PurchaseDate","local":"purchaseDate","default":date},
    {"QR":"PurchasePrice","local":"purchasePrice"},
    {"QR":"UsageType","local":"usage"},
    {"QR":"MonthsOwnerOccupied","local":"occupancy"},
    {"QR":"CurrentlyInsured","local":"prior"},

    {"QR":"CurrentCarrier","local":"carrier"},
    {"QR":"CurrentPolicyNumber","local":"policy"},
 

    {"QR":"CurrentPolicyExpirationDate","local":"priorexp"},
    {"QR":"Lapses","local":"lapses"},
    {"QR":"EffectiveDate","local":"effective","default":date},
    {"QR":"Claims","local":"claims"},
    {"QR":"Address","local":"address"},
    {"QR":"Address2","local":"address2"},
    {"QR":"City","local":"city"},
    {"QR":"State","local":"state"},

    {"QR":"Zip","local":"zipcode"},
    {"QR":"County","local":"county"},
    {"QR":"YearBuilt","local":"year"},
    {"QR":"WaterHeaterYear","local":"waterheater","default":"2017"},
    {"QR":"RoofYear","local":"roofYear","default":"2017"},
    {"QR":"Stories","local":"stories"},
    {"QR":"Families","local":"families"},
    {"QR":"SquareFeet","local":"livingArea"},
    {"QR":"Bathroom1Type","local":"bathroom1_type","default":"Full Builders Grade"},
    {"QR":"Bathroom1Count","local":"bathroom1_count"},

    {"QR":"Bathroom2Type","local":"bathroom2_type","default":"Half Builders Grade"},
    {"QR":"Bathroom2Count","local":"bathroom2_count"},
    {"QR":"CentralHeatAndAir","local":"centralHeat"},
    {"QR":"FirePlaces","local":"fire_places","default":"None"},
    {"QR":"FoundationShape","local":"foundationShape"},
    {"QR":"FoundationType","local":"foundationType"},
    {"QR":"Floor","local":"floor"},
    {"QR":"RoofMaterial","local":"roofMaterial"},
    {"QR":"RoofShape","local":"roofShape"},
    {"QR":"PoolType","local":"pool"},
    {"QR":"BurglarAlarm","local":"burglar"},

    {"QR":"FireAlarm","local":"fire"},
    {"QR":"StructureType","local":"structureType"},
    {"QR":"MasonryConstruction","local":"wallMasonry"},
    {"QR":"WallConstruction","local":"wallConstruction"},
    {"QR":"FrameConstruction","local":"wallFrame"},
    {"QR":"GatedCommunity","local":"gated"},
    {"QR":"DistanceToHydrant","local":"distance_to_hydrant","default":"Within 1000 Feet"},
    {"QR":"DistanceToStation","local":"distance_to_station","default":"Within 5 Miles"},
    {"QR":"KitchenType","local":"kitchen_type","default":"Builders Grade"},
    {"QR":"QualityGrade","local":"quality_grade","default":"Standard"},

    {"QR":"WallHeight","local":"wall_height","default":"8"},
    {"QR":"HurricaneDeductible","local":"hurricane"},
    {"QR":"AllOtherPerilsDeductible","local":"aop"},
    {"QR":"Carpet","local":"carpet","default":"50"},
    {"QR":"Tile","local":"tile","default":"50"},
    {"QR":"WithinCityLimits","local":"within_city_limits","default":"1"},
    {"QR":"CoApplicantNameFirst","local":"cofirst_name"},

    {"QR":"CoApplicantNameLast","local":"colast_name"},
    {"QR":"CoApplicantDateOfBirth","local":"codob"},
    {"QR":"CoApplicantGender","local":"cogender"},

    {"QR":"CoApplicantMaritalStatus","local":"comarried"},
    {"QR":"RoofCovering","local":"roofCovering"},
    {"QR":"SecondaryWaterResistance","local":"swr"},
    {"QR":"RoofDeckAttachment","local":"roofDeck"},
    {"QR":"RoofWallConnection","local":"roofWall"},
    {"QR":"OpeningProtection","local":"opening"},
    {"QR":"InspectorName","local":"inspectorName"},
    {"QR":"InspectorCompanyName","local":"inspectionCompany"},
    {"QR":"InspectorNumber","local":"inspectorLicense"},
    {"QR":"InspectionDate","local":"inspectionDate"},

]

let sampleLead = {"first_name":"","last_name":"","email":"","phone":"","address":"","city":"","state":"","zipcode":"","address2":"","prior":true,"new":false,"married":false,"mortgage":true,"inspections":false,"primary":true,"claims":false,"damage":false,"roofMaterial":"Composite Shingle","beds":2,"baths":2,"usage":"Primary","wallType":"Masonry","wallMaterial":"Concrete Block - Stucco","roofType":"Composite Shingle","roofShape":"Gable","frameConstruction":"Frame - Stucco","masonryConstruction":"Concrete Block - Stucco","foundationShape":"4 Corners","floor":1,"stories":1,"foundationType":"Slab","pool":"None","structureType":"Single Family","occupancy":"9 months or more","coverageB":"2%","coverageC":"25%","coverageD":"10%","medical":"$5000","aop":"$2500","hurricane":"2%","lossAssessment":"$0"}

const yesNoList=[
    "NewPurchase",
    "CurrentlyInsured",
    "Lapses",
    "Claims",
    "SecondaryWaterResistance",
    "CentralHeatAndAir",
]
const alarmList=[
    "BurglarAlarm",
    "FireAlarm"
]
const ExportAsJSON = (lead)=> {
    let neoLead = {}
    lead.priorexp=convertDate(lead.priorexp)
    lead.effective=convertDate(lead.effective)
    lead.purchaseDate=convertDate(lead.purchaseDate)
    lead.dob=convertDate(lead.dob)
    lead.codob=convertDate(lead.codob)
    lead.inspectionDate=convertDate(lead.inspectionDate)

    //create a neoLead with qrKeys and lead values
    let bathsSplit=(lead.baths).toString().split(".")
    keysMatch.map(item => {
        const leadKey = item.local;
        const qrKey = item.QR;
        let value = lead[leadKey];
        //if value undefined, get default value
        if (value === true) {
            value = item.default;
        }
        if (value === undefined) {
            value = item.default;
        }
        alarmList.forEach(element => {
            if(element==qrKey){
                value = value ? "Rep to Central Station" : "None";
            }
        });
        yesNoList.forEach(element => {
            if(element==qrKey){
                value = value ? "Yes" : "No";
            }
        });
        if (qrKey == "GatedCommunity") {
            value = value ? "Single Entry" : "No";
        }
        if (qrKey == "MaritalStatus") {
            value = value ? "Married" : "Single";
        }
        //split baths if dot

        if(qrKey=="Bathroom1Count"){
            value=bathsSplit[0]
        }
        if(qrKey=="Bathroom2Count"){
            if(bathsSplit[1]=='5'){
                value='1'
            }else{
            value='0'}
        }
        console.log(qrKey, value);
        neoLead[qrKey]= value;
    }
    )
    return neoLead;
}
const Export = (lead)=> {
    lead.priorexp=convertDate(lead.priorexp)
    lead.effective=convertDate(lead.effective)
    lead.purchaseDate=convertDate(lead.purchaseDate)
    lead.dob=convertDate(lead.dob)
    lead.codob=convertDate(lead.codob)
    lead.inspectionDate=convertDate(lead.inspectionDate)

    //create a csv format string for the lead
    const firstRow = keysMatch.map(item => item.QR).join(',');
    let bathsSplit=(lead.baths).toString().split(".")
    let lista = []
    const secondRow = keysMatch.map(item => {
        
        const leadKey = item.local;
        const qrKey = item.QR;
        lista.push(qrKey)
        let value = lead[leadKey];
        //if value undefined, get default value
        if (value === true) {
            value = item.default;
        }
        if (value === undefined) {
            value = item.default;
        }
        yesNoList.forEach(element => {
            if(element==qrKey){
                value = value ? "Rep to Central Station" : "None";
            }
        });
        alarmList.forEach(element => {
            if(element==qrKey){
                value = value ? "Yes" : "No";
            }
        });
        if (qrKey == "GatedCommunity") {
            value = value ? "Single Entry" : "No";
        }
        if (qrKey == "MaritalStatus") {
            value = value ? "Married" : "Single";
        }
        //split baths if dot

        if(qrKey=="Bathroom1Count"){
            value=bathsSplit[0]
        }
        if(qrKey=="Bathroom2Count"){
            if(bathsSplit[1]=='5'){
                value='1'
            }else{
            value='0'}
        }
        console.log(qrKey, value);
        return value;
    }
    ).join(',');
    const csv = firstRow + '\n' + secondRow;
    console.log(lista)
    return csv;
}



Export(sampleLead)