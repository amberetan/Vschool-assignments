var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function methods(arr) {
    const ageList = arr.reduce((final, people) => {
        if(people.age > 18){
            final.push(people)
        }
        return final
    }, [])
    const sortAlpha = ageList.sort((a,b)=> (a.lastName > b.lastName ? 1 : -1))
    return sortAlpha.map(function(list){
        return "<li>"+ list.firstName + " " + list.lastName + ", " + list.age + "</li>"})

}
    
console.log(methods(peopleArray))
