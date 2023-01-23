import { Link } from "@reach/router"
import React from "react"
import WhiteNavBar from "../../elements/WhiteNavBar"
import Title from "../dashelements/title";
import "../css/lead.css";

export default function Lead(props) {
    //get lead from props.clients
    const lead = props.clients.find(lead => lead.id === props.leadId)
    let profilePicture = "url(https://www.pngfind.com/pngs/m/540-5404923_my-wedding-missing-profile-picture-icon-hd-png.png)"
    try {
      profilePicture="url("+lead.profilePicture.url+")"
    } catch (error) {
    }
    
  return (
<>
<WhiteNavBar userPack={props.userPack}/>
     <div style={{paddingTop:"72px"}}></div>
      {/* <div className="myRow center" style={{gap:"30px"}}>


      <div className="title6 link">My Profile</div>
      <div className="title6 link">Policies</div>
      <div className="title6 link">Quotes</div>
      <div className="title6 link">Assets</div>
    </div> */}
    <div className="myRow center">
    <div className="profilePic" style={{backgroundImage:profilePicture,
    WebkitBackgroundSize:"100%"
  }}></div>
    </div>
    <div className="myRow center" style={{marginTop:"17px"}}>
     

    </div>
   <div className='center' style={{margin:"18px"}}>
   <Title text={'No name'}/>
   </div>
<div className="myRow center" style={{gap:"10px"}}>
<div className="blueIcon center">
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37305 8C9.41734 8 10.4189 7.60491 11.1573 6.90165C11.8957 6.19839 12.3105 5.24456 12.3105 4.25C12.3105 3.25544 11.8957 2.30161 11.1573 1.59835C10.4189 0.895088 9.41734 0.5 8.37305 0.5C7.32876 0.5 6.32724 0.895088 5.58881 1.59835C4.85039 2.30161 4.43555 3.25544 4.43555 4.25C4.43555 5.24456 4.85039 6.19839 5.58881 6.90165C6.32724 7.60491 7.32876 8 8.37305 8V8ZM10.998 4.25C10.998 4.91304 10.7215 5.54893 10.2292 6.01777C9.73692 6.48661 9.06924 6.75 8.37305 6.75C7.67685 6.75 7.00917 6.48661 6.51689 6.01777C6.02461 5.54893 5.74805 4.91304 5.74805 4.25C5.74805 3.58696 6.02461 2.95107 6.51689 2.48223C7.00917 2.01339 7.67685 1.75 8.37305 1.75C9.06924 1.75 9.73692 2.01339 10.2292 2.48223C10.7215 2.95107 10.998 3.58696 10.998 4.25V4.25ZM16.248 14.25C16.248 15.5 14.9355 15.5 14.9355 15.5H1.81055C1.81055 15.5 0.498047 15.5 0.498047 14.25C0.498047 13 1.81055 9.25 8.37305 9.25C14.9355 9.25 16.248 13 16.248 14.25ZM14.9355 14.245C14.9342 13.9375 14.7334 13.0125 13.8435 12.165C12.9878 11.35 11.3774 10.5 8.37305 10.5C5.36742 10.5 3.7583 11.35 2.90255 12.165C2.01267 13.0125 1.81317 13.9375 1.81055 14.245H14.9355Z" fill="white"/>
</svg>


</div>
<div className="blueIcon center">
<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_995_1065" fill="white">
<path d="M21.9733 8.31134L11.9733 0.394677C11.8484 0.296378 11.6795 0.241203 11.5034 0.241203C11.3272 0.241203 11.1583 0.296378 11.0334 0.394677L1.03335 8.31134C0.924134 8.41231 0.867063 8.54218 0.873544 8.67501C0.880025 8.80784 0.94958 8.93384 1.06831 9.02784C1.18704 9.12183 1.3462 9.17689 1.51398 9.18202C1.68177 9.18716 1.84582 9.14198 1.97335 9.05551L11.5 1.51357L21.0267 9.06079C21.1542 9.14725 21.3183 9.19243 21.4861 9.1873C21.6538 9.18217 21.813 9.12711 21.9317 9.03311C22.0505 8.93912 22.12 8.81312 22.1265 8.68029C22.133 8.54746 22.0759 8.41759 21.9667 8.31662L21.9733 8.31134Z"/>
</mask>
<path d="M21.9733 8.31134L11.9733 0.394677C11.8484 0.296378 11.6795 0.241203 11.5034 0.241203C11.3272 0.241203 11.1583 0.296378 11.0334 0.394677L1.03335 8.31134C0.924134 8.41231 0.867063 8.54218 0.873544 8.67501C0.880025 8.80784 0.94958 8.93384 1.06831 9.02784C1.18704 9.12183 1.3462 9.17689 1.51398 9.18202C1.68177 9.18716 1.84582 9.14198 1.97335 9.05551L11.5 1.51357L21.0267 9.06079C21.1542 9.14725 21.3183 9.19243 21.4861 9.1873C21.6538 9.18217 21.813 9.12711 21.9317 9.03311C22.0505 8.93912 22.12 8.81312 22.1265 8.68029C22.133 8.54746 22.0759 8.41759 21.9667 8.31662L21.9733 8.31134Z" fill="#521515"/>
<path d="M21.9733 8.31134L23.215 9.87924L25.1952 8.31108L23.2148 6.74325L21.9733 8.31134ZM11.9733 0.394677L13.2148 -1.17342L13.2102 -1.177L11.9733 0.394677ZM11.5034 0.241203V-1.7588V0.241203ZM11.0334 0.394677L9.79648 -1.17701L9.79195 -1.17341L11.0334 0.394677ZM1.03335 8.31134L-0.208054 6.74325L-0.268074 6.79077L-0.324286 6.84273L1.03335 8.31134ZM1.97335 9.05551L3.09567 10.7109L3.15683 10.6695L3.21476 10.6236L1.97335 9.05551ZM11.5 1.51357L12.742 -0.0541027L11.5005 -1.03765L10.2586 -0.0545254L11.5 1.51357ZM21.0267 9.06079L19.7847 10.6285L19.8429 10.6746L19.9044 10.7162L21.0267 9.06079ZM21.9667 8.31662L20.725 6.74873L18.8934 8.19924L20.609 9.78523L21.9667 8.31662ZM23.2148 6.74325L13.2148 -1.17341L10.7319 1.96277L20.7319 9.87944L23.2148 6.74325ZM13.2102 -1.177C12.6944 -1.58294 12.0768 -1.7588 11.5034 -1.7588V2.2412C11.2822 2.2412 11.0025 2.1757 10.7365 1.96635L13.2102 -1.177ZM11.5034 -1.7588C10.9299 -1.7588 10.3123 -1.58294 9.79649 -1.177L12.2702 1.96635C12.0042 2.1757 11.7245 2.2412 11.5034 2.2412V-1.7588ZM9.79195 -1.17341L-0.208054 6.74325L2.27476 9.87944L12.2748 1.96277L9.79195 -1.17341ZM-0.324286 6.84273C-0.810048 7.29179 -1.16303 7.97412 -1.12408 8.77248L2.87117 8.57755C2.89716 9.11024 2.65832 9.53283 2.39099 9.77996L-0.324286 6.84273ZM-1.12408 8.77248C-1.08541 9.56495 -0.674479 10.199 -0.173097 10.5959L2.30972 7.45975C2.57364 7.66868 2.84546 8.05073 2.87117 8.57755L-1.12408 8.77248ZM-0.173097 10.5959C0.319078 10.9856 0.904596 11.1643 1.45285 11.1811L1.57511 7.18296C1.7878 7.18946 2.055 7.2581 2.30972 7.45975L-0.173097 10.5959ZM1.45285 11.1811C2.00178 11.1979 2.58818 11.055 3.09567 10.7109L0.851035 7.40009C1.10345 7.22896 1.36175 7.17643 1.57511 7.18296L1.45285 11.1811ZM3.21476 10.6236L12.7414 3.08166L10.2586 -0.0545254L0.731946 7.48742L3.21476 10.6236ZM10.2581 3.08123L19.7847 10.6285L22.2686 7.49312L12.742 -0.0541027L10.2581 3.08123ZM19.9044 10.7162C20.4118 11.0603 20.9982 11.2032 21.5472 11.1864L21.4249 7.18824C21.6383 7.18171 21.8966 7.23424 22.149 7.40537L19.9044 10.7162ZM21.5472 11.1864C22.0954 11.1696 22.681 10.9908 23.1731 10.6012L20.6903 7.46502C20.945 7.26337 21.2122 7.19474 21.4249 7.18824L21.5472 11.1864ZM23.1731 10.6012C23.6745 10.2043 24.0855 9.57023 24.1241 8.77775L20.1289 8.58282C20.1546 8.05601 20.4264 7.67396 20.6903 7.46502L23.1731 10.6012ZM24.1241 8.77775C24.1631 7.97941 23.8101 7.29707 23.3243 6.84801L20.609 9.78523C20.3417 9.5381 20.1029 9.11551 20.1289 8.58282L24.1241 8.77775ZM23.2083 9.88451L23.215 9.87924L20.7317 6.74345L20.725 6.74873L23.2083 9.88451Z" fill="white" mask="url(#path-1-inside-1_995_1065)"/>
<mask id="path-3-inside-2_995_1065" fill="white">
<path d="M18.1667 16.7032H14.8333V11.4255H8.16667V16.7032H4.83333V9.31436L3.5 10.3699V16.7032C3.5 16.9832 3.64048 17.2517 3.89052 17.4496C4.14057 17.6476 4.47971 17.7588 4.83333 17.7588H9.5V12.481H13.5V17.7588H18.1667C18.5203 17.7588 18.8594 17.6476 19.1095 17.4496C19.3595 17.2517 19.5 16.9832 19.5 16.7032V10.2432L18.1667 9.18769V16.7032Z"/>
</mask>
<path d="M18.1667 16.7032H14.8333V11.4255H8.16667V16.7032H4.83333V9.31436L3.5 10.3699V16.7032C3.5 16.9832 3.64048 17.2517 3.89052 17.4496C4.14057 17.6476 4.47971 17.7588 4.83333 17.7588H9.5V12.481H13.5V17.7588H18.1667C18.5203 17.7588 18.8594 17.6476 19.1095 17.4496C19.3595 17.2517 19.5 16.9832 19.5 16.7032V10.2432L18.1667 9.18769V16.7032Z" fill="#521515"/>
<path d="M18.1667 16.7032V18.7032H20.1667V16.7032H18.1667ZM14.8333 16.7032H12.8333V18.7032H14.8333V16.7032ZM14.8333 11.4255H16.8333V9.42547H14.8333V11.4255ZM8.16667 11.4255V9.42547H6.16667V11.4255H8.16667ZM8.16667 16.7032V18.7032H10.1667V16.7032H8.16667ZM4.83333 16.7032H2.83333V18.7032H4.83333V16.7032ZM4.83333 9.31436H6.83333V5.18015L3.59193 7.74627L4.83333 9.31436ZM3.5 10.3699L2.25859 8.80182L1.5 9.40237V10.3699H3.5ZM3.5 16.7032L1.5 16.7032L3.5 16.7032ZM9.5 17.7588V19.7588H11.5V17.7588H9.5ZM9.5 12.481V10.481H7.5V12.481H9.5ZM13.5 12.481H15.5V10.481H13.5V12.481ZM13.5 17.7588H11.5V19.7588H13.5V17.7588ZM19.5 10.2432H21.5V9.27571L20.7414 8.67515L19.5 10.2432ZM18.1667 9.18769L19.4081 7.6196L16.1667 5.05349V9.18769H18.1667ZM18.1667 14.7032H14.8333V18.7032H18.1667V14.7032ZM16.8333 16.7032V11.4255H12.8333V16.7032H16.8333ZM14.8333 9.42547H8.16667V13.4255H14.8333V9.42547ZM6.16667 11.4255V16.7032H10.1667V11.4255H6.16667ZM8.16667 14.7032H4.83333V18.7032H8.16667V14.7032ZM6.83333 16.7032V9.31436H2.83333V16.7032H6.83333ZM3.59193 7.74627L2.25859 8.80182L4.74141 11.938L6.07474 10.8824L3.59193 7.74627ZM1.5 10.3699V16.7032H5.5V10.3699H1.5ZM1.5 16.7032C1.5 17.6845 1.99536 18.5002 2.64912 19.0177L5.13193 15.8815C5.28559 16.0032 5.5 16.2819 5.5 16.7032L1.5 16.7032ZM2.64912 19.0177C3.2912 19.526 4.08105 19.7588 4.83333 19.7588V15.7588C4.86417 15.7588 4.90157 15.7634 4.94628 15.778C4.99027 15.7924 5.05641 15.8218 5.13193 15.8815L2.64912 19.0177ZM4.83333 19.7588H9.5V15.7588H4.83333V19.7588ZM11.5 17.7588V12.481H7.5V17.7588H11.5ZM9.5 14.481H13.5V10.481H9.5V14.481ZM11.5 12.481V17.7588H15.5V12.481H11.5ZM13.5 19.7588H18.1667V15.7588H13.5V19.7588ZM18.1667 19.7588C18.9189 19.7588 19.7088 19.526 20.3509 19.0177L17.8681 15.8815C17.9436 15.8218 18.0097 15.7924 18.0537 15.778C18.0984 15.7634 18.1358 15.7588 18.1667 15.7588V19.7588ZM20.3509 19.0177C21.0046 18.5002 21.5 17.6845 21.5 16.7032H17.5C17.5 16.2819 17.7144 16.0032 17.8681 15.8815L20.3509 19.0177ZM21.5 16.7032V10.2432H17.5V16.7032H21.5ZM20.7414 8.67515L19.4081 7.6196L16.9253 10.7558L18.2586 11.8113L20.7414 8.67515ZM16.1667 9.18769V16.7032H20.1667V9.18769H16.1667Z" fill="white" mask="url(#path-3-inside-2_995_1065)"/>
</svg>

</div>
<div className="blueIcon">
<svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.01831 4.96875C3.01831 4.96875 5.26007 4.42709 11.6275 4.42709C17.9948 4.42709 20.2366 4.96875 20.2366 4.96875M21.9637 6.03403C21.6092 5.59483 20.2922 5.2924 19.735 4.50201C19.1779 3.71163 18.7218 1.99997 17.3037 1.34229C15.8856 0.684618 13.1752 0.5 11.6274 0.5C10.0797 0.5 7.37123 0.680556 5.95121 1.34094C4.53118 2.00132 4.07703 3.71163 3.51985 4.50066C2.96267 5.28969 1.64567 5.59483 1.29114 6.03403C0.936621 6.47323 0.687053 9.24972 0.838922 10.6111C0.990791 11.9725 1.27422 12.7778 1.27422 12.7778H5.43369C6.11468 12.7778 6.3362 12.539 7.72914 12.4167C9.25751 12.2812 10.7569 12.2361 11.6274 12.2361C12.498 12.2361 14.0457 12.2812 15.5731 12.4167C16.9661 12.5399 17.1948 12.7778 17.8686 12.7778H21.9797C21.9797 12.7778 22.2631 11.9725 22.415 10.6111C22.5669 9.24972 22.3163 6.47323 21.9637 6.03403ZM18.5921 12.7778H21.3006V13.5H18.5921V12.7778ZM1.95424 12.7778H4.66274V13.5H1.95424V12.7778ZM20.1399 4.11111H20.9137H20.1399ZM2.34119 4.11111H3.11504H2.34119ZM16.8737 9.0924C16.5878 8.78411 15.6563 8.52681 14.423 8.35438C13.1896 8.18195 12.7398 8.13727 11.6371 8.13727C10.5343 8.13727 10.0328 8.21129 8.85071 8.35438C7.66865 8.49747 6.78113 8.75206 6.40049 9.0924C5.82929 9.60879 6.66602 10.1884 7.32283 10.2588C7.95933 10.3265 9.23184 10.3017 11.6424 10.3017C14.053 10.3017 15.3255 10.3265 15.962 10.2588C16.6178 10.1843 17.3946 9.6449 16.8737 9.0924ZM20.119 6.10827C20.1163 6.07242 20.0995 6.03877 20.0718 6.01378C20.0442 5.98879 20.0076 5.97421 19.9691 5.97286C19.3979 5.9539 18.818 5.99181 17.7892 6.27484C17.2644 6.41784 16.7715 6.64813 16.3344 6.95463C16.2241 7.03497 16.2633 7.25209 16.4016 7.27511C17.2495 7.36793 18.1026 7.41465 18.9563 7.41504C19.4685 7.41504 19.9971 7.27963 20.0953 6.85352C20.1454 6.60783 20.1534 6.35629 20.119 6.10827V6.10827ZM3.13579 6.10827C3.1385 6.07242 3.15531 6.03877 3.18298 6.01378C3.21065 5.98879 3.24724 5.97421 3.28572 5.97286C3.85693 5.9539 4.43683 5.99181 5.46558 6.27484C5.99043 6.41784 6.48329 6.64813 6.92043 6.95463C7.0307 7.03497 6.99153 7.25209 6.8532 7.27511C6.00526 7.36793 5.15226 7.41465 4.29851 7.41504C3.78631 7.41504 3.25767 7.27963 3.15949 6.85352C3.10943 6.60783 3.10143 6.35629 3.13579 6.10827V6.10827Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div className="blueIcon">
<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5332 3.2H12.877V1.6C12.877 0.716667 12.1631 0 11.2832 0H5.9707C5.09082 0 4.37695 0.716667 4.37695 1.6V3.2H1.7207C0.84082 3.2 0.126953 3.91667 0.126953 4.8V14.4C0.126953 15.2833 0.84082 16 1.7207 16H15.5332C16.4131 16 17.127 15.2833 17.127 14.4V4.8C17.127 3.91667 16.4131 3.2 15.5332 3.2ZM6.50195 2.13333H10.752V3.2H6.50195V2.13333ZM11.8145 10.4C11.8145 10.5467 11.6949 10.6667 11.5488 10.6667H9.68945V12.5333C9.68945 12.68 9.56992 12.8 9.42383 12.8H7.83008C7.68398 12.8 7.56445 12.68 7.56445 12.5333V10.6667H5.70508C5.55898 10.6667 5.43945 10.5467 5.43945 10.4V8.8C5.43945 8.65333 5.55898 8.53333 5.70508 8.53333H7.56445V6.66667C7.56445 6.52 7.68398 6.4 7.83008 6.4H9.42383C9.56992 6.4 9.68945 6.52 9.68945 6.66667V8.53333H11.5488C11.6949 8.53333 11.8145 8.65333 11.8145 8.8V10.4Z" fill="white"/>
</svg>

</div>
<div className="blueIcon">
<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.62695 9.33333H3.12695V10.6667H3.62695V9.33333ZM9.62695 10.6667H10.127V9.33333H9.62695V10.6667ZM7.62695 13.3333H7.12695V14.6667H7.62695V13.3333ZM9.62695 14.6667H10.127V13.3333H9.62695V14.6667ZM3.62695 5.33333H3.12695V6.66667H3.62695V5.33333ZM5.62695 6.66667H6.12695V5.33333H5.62695V6.66667ZM9.62695 0.666667L9.98095 0.194667L9.83395 0H9.62695V0.666667ZM12.627 4.66667H13.127V4.39067L12.981 4.19467L12.627 4.66667ZM3.62695 10.6667H9.62695V9.33333H3.62695V10.6667ZM7.62695 14.6667H9.62695V13.3333H7.62695V14.6667ZM3.62695 6.66667H5.62695V5.33333H3.62695V6.66667ZM11.627 18.6667H1.62695V20H11.627V18.6667ZM1.12695 18V2H0.126953V18H1.12695ZM1.62695 1.33333H9.62695V0H1.62695V1.33333ZM12.127 4.66667V18H13.127V4.66667H12.127ZM9.27295 1.13867L12.273 5.13867L12.981 4.19467L9.98095 0.194667L9.27295 1.13867ZM1.62695 18.6667C1.49434 18.6667 1.36717 18.5964 1.2734 18.4714C1.17963 18.3464 1.12695 18.1768 1.12695 18H0.126953C0.126953 18.5304 0.284988 19.0391 0.566293 19.4142C0.847598 19.7893 1.22913 20 1.62695 20V18.6667ZM11.627 20C12.0248 20 12.4063 19.7893 12.6876 19.4142C12.9689 19.0391 13.127 18.5304 13.127 18H12.127C12.127 18.1768 12.0743 18.3464 11.9805 18.4714C11.8867 18.5964 11.7596 18.6667 11.627 18.6667V20ZM1.12695 2C1.12695 1.82319 1.17963 1.65362 1.2734 1.5286C1.36717 1.40357 1.49434 1.33333 1.62695 1.33333V0C1.22913 0 0.847598 0.210714 0.566293 0.585786C0.284988 0.960859 0.126953 1.46957 0.126953 2H1.12695Z" fill="white"/>
</svg>

</div>


</div>

<div className="myRow center">
<div className="Frame101" style={{paddingLeft: 18, paddingRight: 18, paddingTop: 14, paddingBottom: 14, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
    <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
        <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="Phone:" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Phone:</p>
            <div style={{width: 6,}}/>
            <p className="(561)440-6780" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>(561) 440-6780</p>
        </div>
    </div>
    <div style={{height: 6,}}/>
    <div className="Frame103" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
        <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="Email:" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Email:</p>
            <div style={{width: 6,}}/>
            <p className="jersonamendez@gmail.com" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>jersonamendez@gmail.com</p>
        </div>
    </div>
    <div style={{height: 6,}}/>
    <div className="line" style={{width: 301, display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
        <div className="title" style={{height: '100%', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="Addresses" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Addresses</p>
        </div>
        <div style={{width: 10,}}/>
        <div className="Frame101" style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <div className="addresses" style={{height: 50, display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                <div className="addressBox" style={{width: 114, height: 50, padding: 6, backgroundColor: 'white', borderRadius: 5, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                    <p className="2972Westheimer Rd. Santa Ana, Illinois 85486" style={{width: 108, height: 44, fontSize: 11, fontWeight: '500', lineHeight: '100%', color: 'black',}}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
                <div style={{width: 10,}}/>
                <div className="addressBox" style={{width: 114, height: 50, padding: 6, backgroundColor: 'white', borderRadius: 5, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                    <p className="2972Westheimer Rd. Santa Ana, Illinois 85486" style={{width: 108, height: 44, fontSize: 11, fontWeight: '500', lineHeight: '100%', color: 'black',}}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
            </div>
            <div style={{height: 10,}}/>
            <div className="addresses" style={{height: 50, display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                <div className="addressBox" style={{width: 114, height: 50, padding: 6, backgroundColor: 'white', borderRadius: 5, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                    <p className="2972Westheimer Rd. Santa Ana, Illinois 85486" style={{width: 108, height: 44, fontSize: 11, fontWeight: '500', lineHeight: '100%', color: 'black',}}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
                <div style={{width: 10,}}/>
                <div className="addressBox" style={{width: 114, height: 50, padding: 6, backgroundColor: 'white', borderRadius: 5, borderStyle: 'solid', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
                    <p className="2972Westheimer Rd. Santa Ana, Illinois 85486" style={{width: 108, height: 44, fontSize: 11, fontWeight: '500', lineHeight: '100%', color: 'black',}}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                </div>
            </div>
        </div>
    </div>
    <div style={{height: 6,}}/>
    <div className="Frame105" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
        <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="MaritalStatus:" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Marital Status:</p>
            <div style={{width: 6,}}/>
            <p className="Single" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Single</p>
        </div>
    </div>
    <div style={{height: 6,}}/>
    <div className="Frame106" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
        <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="Dateof birth:" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Date of birth:</p>
            <div style={{width: 6,}}/>
            <p className="8/16/13" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>8/16/13</p>
        </div>
    </div>
    <div style={{height: 6,}}/>
    <div className="Frame107" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
        <div className="Frame102" style={{width: '100%', display: 'inline-flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
            <p className="Dependants" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>Dependants</p>
            <div style={{width: 6,}}/>
            <p className="None" style={{fontSize: 12, fontWeight: '500', lineHeight: '100%', color: 'rgba(71.19, 71.19, 71.19, 1)',}}>None</p>
        </div>
    </div>
</div>
</div>
   
</>
  )
}



