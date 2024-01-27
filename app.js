// ab hm bnaenge array of objects yni k objects ka ek array jske undr itne saare obj hnge

// let arrOfObj = [
//     {
//         p_id : '01',
//         p_name : 'infinix',
//         p_image : 'https://propakistani.pk/price/wp-content/uploads/2022/05/Infinix-Note-12-G96-price-in-Pakistan-200x300.png',
//         p_price : '30,000'
//     }, 

//     {
//         p_id : '02',
//         p_name : 'infinix note 2',
//         p_image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXSexQtb3V7jC7VMKyIupW3vidAZxy-ujUA&usqp=CAU',
//         p_price : '40,000,000' 
//     }, 

//     {
//         p_id : '03',
//         p_name : 'infinix note 12',
//         p_image : 'https://fdn.gsmarena.com/imgroot/news/23/05/infinix-note-30i-ofic/inline/-1200/gsmarena_001.jpg',
//         p_price : '50,000'
//     }
// ]

// acha ab koi bh output nh aayega qk hmne isko cl nh kia t ab hm inko cl krte hn ab ek array
// bni v h usko cl krne ka kia treeqa h phle hm wo dkhte hn:

// document.write(arrOfObj) // ab hm array k undr t chle gae hn lkn obj ko access nh krparh qk
// uske undr objects pre hwe hn ab obj ko print krwne k 2 treeqe hn ek t individually sbko krna
// dsra loop se ek sth sbko krna phle hm individually krwa ke check krte hn:
// document.write(arrOfObj[0].p_id, '<br>', arrOfObj[0].p_name)  // acha ab individual krwne mn
// bh ek msla hgya wo ye k jb hm image ko krwa rh hn tb uski link aarh h image nh aarh ab.
// ab mujhe ye krna h k is url ko image mn lke aana h t hm kia krnge. qk hmn document pe direct
// lke aana h ksi event ko cl krwne pe thri lke aana h islye hm kia krnge hm document pe img
// ka tag bna lnge or uski id se JS mn ko usko access krnge ab jb uski id se hmne JS mn access
// krlia phr hm uski url ko us id k equal krlnge t doc pe iamge aajaegi ab hmn uski height or
// width set krni h t hm set attribute se bh krskte hn or normal width or height se bh kaam
// krskte hn t phle hm normal krte hn.

// let getImage = document.getElementById('img')
// ab hm oose blte hn k hmn set arrtibute se width or height set krni h
// getImage.setAttribute('class', 'img')
// getImage.src = arrOfObj[0].p_image


// for (let i = 0; i < arrOfObj.length; i++) {
//     for(var key in i) {
//         document.write(i[key], '<br>')
//     }
    // document.write(arrOfObj[i], '<br>', '<br>')
// }  // ye task prhne k lye phle mujhe forEach ka loop prhna prega