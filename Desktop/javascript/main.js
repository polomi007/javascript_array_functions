const Comp= [ {name: "c1",category:"finance",start:1990, end:2005},
            {name: "c2",category:"retail",start:1995, end:2005},
            {name: "c3",category:"tech",start:1997, end:2010},
            {name: "c4",category:"education",start:1999, end:2006},
            {name: "c5",category:"finance",start:2005, end:2009}];


const ages= [30,20,22,45,68,38,11,10,19,16,21];

// ForEach,goes through each element of the array,instaed of using a loop we can simply use this function !

Comp.forEach(function(companies){
    console.log(companies);
});


// Filter retail companies , companies started after '80s

    
const retail= Comp.filter( (Company) => Company.category==="retail") ;
console.log(retail);

const after_eighties= Comp.filter( (Company) => Company.start>1980) ;
console.log(after_eighties);

// Map,  this creates anew array based on the condition given and calls function for every element
// squaring the age numbers in ages array and also getting their sq roots

const sq_age = ages.map(new_sq_age => new_sq_age*new_sq_age);
console.log(sq_age);

const sq_root_age = ages.map(new_sq_root_age => Math.sqrt(new_sq_root_age));
console.log(sq_root_age);

// for perfoming several functions and not cearting a new array we can do this

const new_age_map=ages
                        .map(new_age => new_age*2)
                        .map(new_age => Math.sqrt(new_age));
console.log(new_age_map);


// Sort
// sort companies by their active years

const sort_by_avtive=Comp.sort((a,b)=> a.end-a.start > b.end-b.start ? 1:-1);
console.log(sort_by_avtive);

 
// Reduce
// getting an overall sum for any specific characteristic of the array

const reduce_total_years= Comp.reduce((total,comp_years) => total + (comp_years.end - comp_years.start),0);
console.log(reduce_total_years);

// COMBINING EVERYTHING NOW

// WITH AGES ARRAY

const combine = ages
                    .map(age=> age*2)
                    .filter(age=> age>40)
                    .sort((a,b)=> a-b)
                    .reduce((total,age)=>total+age,0);
console.log(combine);

// Includes,
// checking whether company category includes retail or not

const ret_category =Comp
                    .map(cat=> cat.category)
                    .includes("retail");
console.log(ret_category);

// EVERY
// whether every category is retail?

const check_category =Comp
                    .every(com=> com.category==='retail');
console.log(check_category);


// some more examples..



