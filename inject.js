(function() {

    let some = document.querySelector('[class = "get-started-button"]');
    some.click()

    let div = document.querySelector('[ng-model="personalDetails.name"]');
    div.value = "helllo"
    let div2 = document.querySelector('[ng-model="personalDetails.email"]');
    div2.value = "abc@abc.com"
    let div3 = document.querySelector('[ng-model="personalDetails.phone"]');
    div3.value = "2222222222"
    


})();