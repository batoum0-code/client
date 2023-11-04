import axios from "axios";

const params = {
  headers: {
      Authorization: `Bearer 014354fb9a82b3535403575c426177a899f95c78ca668078f8017cf8add920937ad7fa8ce281a2e9944ac226de447e752e1cac3f7a28755ccbe4ade79deafe27d3c3d786c2a3a8cdff11f36461f9902e82d9c3a484591272e7ae7a97c46f1d4b946728f575f068583225cf4284a08323f5b1c5db660f5da9795bca8b984247f9`
  },
};


export const fetchData = async (endPoint) => {

  try{
    
    const data = await axios.get(`${process.env.REACT_APP_API_URL}${endPoint}` , params )
    return data;

  } catch (error) {
      console.log(error);
      return error; 
  }

}