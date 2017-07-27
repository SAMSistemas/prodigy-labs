const createUser = (name, lastName, phone, birth) => ({name, lastName, phone, birth: new Date(birth)});
export const dataWrap = data => ({data});

export default {
    team: [
        createUser("Daniel", "Gómez", "111111", "6/8/1991"),
        createUser("Eric", "Lang", "111111", "6/8/1991"),
        createUser("Cecilia", "Rodriguez", "111111", "6/8/1991")
    ]

}


