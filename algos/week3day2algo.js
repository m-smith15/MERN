
const object = {
    thing: [],
    thing2: [],
    oepndelivery: [
        {
            id:123,
            type: "whocares",
            codes: "what"
        },
        {
            id:3233,
            type:"shirmp",
            code:"lol"
        }
    ]
}

const object1 = {
    closedCreditMemos: [],

    closedDeliveryOrders: [],

    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],

    openCreditMemos: [],

    openDeliveryOrders: [
        {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
        },
        {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
        },
    ],

    openPickupOrders: [
        {
        id: 123,
        type: "pickup",
        },
    ],

    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];


function flattenObjectOfArrays() {
    //jesse worked on this!
}


// functional solution
function flattenObjectArrayFunctional(object){
    let output = [];

    for(array of Object.values(object)){
        output = output.concat(array); 
    }
    return output.map(object => { return {id: object.id, type: object.type} });
}


/*****************************************************************************/
console.log(functionalFlattenObjectOfArrays(object))