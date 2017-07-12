const createUser = (name, lastname, phone, birth) => ({name, lastname, phone, birth});
export const dataWrap = data => ({data});

export default {
    team: [
        createUser("Daniel", "Gómez", "111111", "08/06/1991"),
        createUser("Eric", "Lang", "111111", "8/6/1991"),
        createUser("Cecilia", "Rodriguez", "111111", "8/6/1991")
    ]

}


