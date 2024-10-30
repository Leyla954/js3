// 2)İstifadəçi iki ədəd daxil etsin. Həmin ədədlərin toplanmasını və vurulmasını 
// həyata keçirən bir function yazın.


// function table(){
//     let num1 = +(prompt("birinci reqemi daxil edin"));
//     let num2 = +(prompt("ikinci reqemi daxil edin"));
//     console.log("toplanarsa:", num1 + num2);
//     console.log("vurularsa:", num1 * num2);
    
// }
// table()





// 3)Dörd rəqəmnli bir ədəd daxil edin. Həmin ədəddə 1-ci və 4-cü yerdə duran rəqəmlər  və eyni zamanda 2-ci və 3-cü yerdə duran rəqəmlər bir birinə bərabərdirsə bizə console log da "YES" əks halda "NO" yazdırsın 
// Məsələn 6776 -- YES
//         8989 -- NO
//         6807 -- NO
//         9009 -- YES


// function table(num1, num2, num3, num4){
//     let num5 = prompt("zehmet olmasa dord reqemli bir eded daxil edin");
//     if ( num1 == num4 && num2 == num3) {
// console.log("yes");
//     }else  {
//         console.log("no"); 
//     }
// }
// table()






// 4)İstifadəçidən bir username alın. 
// username daxil edildikdən sonra həmin istifadəçini salamlayan bir bildiriş pəncərəsi açılsın. 
// Bunun üçün bir function-dan istifadə edin.


// function getName(){
//     let userName = prompt("zehmet olmasa adinizi daxil edin");
//     alert ("xos geldiniz" + userName)}
//     getName();






// 5)Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını eyni zamanda müsbət və mənfi olmasını və cüt və
//  tək olmasını yoxlayan bir funksiya yazın. Sonda bizə bilidiriş şəklində ədəd haqqında məlumat göstərilisin Məsələn aşağıdakı kimi. 
// (Console log istifadə etməyin)
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür

// Əgər daxil etdiyimiz eded 100 və ya 0 olarsa onda yazdığımız funksiya işə düşmədən biza bildiriş olaraq "100 və 0 ədələrini daxil edə bilməzsiz" 
// yazısını göstərsin. Şərtləri daxil edərkən tipə görədə yoxlayın.




// function table() {
//     let num1 = +(prompt("reqem daxil edin:"));
//     let result = "";

//     if (num1 > 100) {
//         result += num1 + " 100-dən böyükdür."
//     } else if (num1 < 100) {
//         result += num1 + " 100-dən kiçikdir."
//     } else {
//         result += num1 + " 100-ə bərabərdir."
//     }
//     if (num1 > 0) {
//         result += num1 + " müsbetdir."
//     } else if (num1 < 0) {
//         result += num1 + " menfidir."
//     } else {
//         result += num1 + " sifirdir."
//     }

//     if (num1 % 2 === 0) {
//         result += num1 + " cütdür."
//     } else {
//         result += num1 + " tekdir."
//     }

//     if (num1 === 100 || num1 === 0) {
//         result = "100 və 0 ədələrini daxil edə bilməzsiz"
//     }

//     alert(result);
// }
// table();
