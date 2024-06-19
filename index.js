export const findIt = (arr, latlong) => {
    //sorting arry passed in function by lat and long assuming the 
    // object in array has the lat long property
    //latlong should be decimal degrees input 41.40338, 2.17403
    latlong = "41.40338, 2.17403"
    let lat = latlong.split(',')[0]
    let long = latlong.split(',')[1]
    let result  = []
    return result
}
const arr= [{name:"item_1", latlong: "40.76544, 1.54367"},{name:"item_2", latlong: "60.25367, 3.25966"},{name:"item_1", latlong: "40.76545, 1.35863"}]
findIt(arr, "41.40338, 2.17403")