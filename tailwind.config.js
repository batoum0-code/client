/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor: "#0d6efd",
        bSindigo: "#6610f2",
        bSpurple: "#6f42c1",
        bSpink: "#d63384",
        bSred:" #dc3545",
        bSorange: "#fd7e14",
        bSyellow: "#ffc107",
        bSgreen: "#198754",
        bSteal: "#20c997",
        bScyan: "#0dcaf0",
        bSwhite: "#fff",
        bSgray: "#6c757d",
        bSgrayDark: "#343a40",
        bSprimary: "#0d6efd",
        bSsecondary: "#6c757d",
        bSsuccess: "#198754",
        bSinfo: "#0dcaf0",
        bSwarning: "#ffc107",
        bSdanger: "#dc3545",
        bSlight: "#f8f9fa",
        bSdark: "#212529",
        bSdenim: "#212c39",
        
            },
    },
  
    screens: {
      'xl' : { 'max' : '1200px'},
      'lg' : { 'max' : '991px'},
      'md' : { 'max' : '767px'},
      'sm' : { 'max' : '550px'},
      'xsm' : { 'max' : '375px'},
    },
    
},
  plugins: [],
}