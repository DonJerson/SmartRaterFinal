import React from 'react';
  
  function ProfileButton(props){
      return(
        <>
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M25.3333 14.2501C25.3333 15.9298 24.666 17.5407 23.4783 18.7284C22.2906 19.9162 20.6797 20.5834 19 20.5834C17.3203 20.5834 15.7093 19.9162 14.5216 18.7284C13.3339 17.5407 12.6666 15.9298 12.6666 14.2501C12.6666 12.5704 13.3339 10.9595 14.5216 9.77174C15.7093 8.58401 17.3203 7.91675 19 7.91675C20.6797 7.91675 22.2906 8.58401 23.4783 9.77174C24.666 10.9595 25.3333 12.5704 25.3333 14.2501V14.2501ZM22.1666 14.2501C22.1666 15.0899 21.833 15.8954 21.2391 16.4893C20.6453 17.0831 19.8398 17.4167 19 17.4167C18.1601 17.4167 17.3547 17.0831 16.7608 16.4893C16.1669 15.8954 15.8333 15.0899 15.8333 14.2501C15.8333 13.4102 16.1669 12.6048 16.7608 12.0109C17.3547 11.417 18.1601 11.0834 19 11.0834C19.8398 11.0834 20.6453 11.417 21.2391 12.0109C21.833 12.6048 22.1666 13.4102 22.1666 14.2501V14.2501Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19 1.58337C9.38123 1.58337 1.58331 9.38129 1.58331 19C1.58331 28.6188 9.38123 36.4167 19 36.4167C28.6187 36.4167 36.4166 28.6188 36.4166 19C36.4166 9.38129 28.6187 1.58337 19 1.58337ZM4.74998 19C4.74998 22.3092 5.8789 25.3555 7.77098 27.7749C9.09976 26.0299 10.814 24.6157 12.7797 23.6429C14.7455 22.67 16.9096 22.1648 19.1029 22.1667C21.2678 22.1647 23.4047 22.6568 25.3506 23.6056C27.2966 24.5544 29.0003 25.9349 30.3319 27.6419C31.7038 25.8426 32.6275 23.7425 33.0266 21.5153C33.4257 19.2881 33.2887 16.998 32.6269 14.8343C31.9652 12.6706 30.7977 10.6955 29.2212 9.0726C27.6446 7.44967 25.7042 6.22548 23.5606 5.50135C21.417 4.77721 19.1317 4.57393 16.8939 4.90833C14.6561 5.24273 12.5301 6.1052 10.6919 7.42438C8.85358 8.74355 7.35585 10.4815 6.32259 12.4944C5.28934 14.5074 4.75027 16.7374 4.74998 19V19ZM19 33.25C15.7287 33.255 12.5562 32.1296 10.0193 30.0644C11.0405 28.6025 12.3996 27.409 13.9811 26.5853C15.5626 25.7616 17.3197 25.3321 19.1029 25.3334C20.8638 25.332 22.5997 25.7507 24.1663 26.5548C25.7329 27.3589 27.0851 28.5251 28.1105 29.9567C25.5539 32.089 22.3291 33.2547 19 33.25V33.25Z" fill="black"/>
</svg>
        {props.children}
        </>
      )
    }
  
  export default ProfileButton;