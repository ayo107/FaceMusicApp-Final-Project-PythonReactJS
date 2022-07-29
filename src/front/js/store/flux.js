const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user_token: null,
			users: [],
			detalle: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {
				//Usuarios
				try {
					const res = await fetch(process.env.BACKEND_URL + "/api/user"); //acá hacemos el fetch, que seria la respuesta
					const data = await res.json(); //la data es la respuesta que nos da el fetch convertido a json
					console.log("Async:", data);
					setStore({
						users: data //data es la información que nos interesa de esa respuesta del fetch
					});
				} catch (error) {
					console.log(error);
				}
			},
			getDetalleUser: async uid => {
				try {
					const id = parseInt(uid, 10) +1;
					const res = await fetch(process.env.BACKEND_URL + "/api/user" + id);
					const data = await res.json();
					console.log("AsyncDetalles:", data.response);
					setStore({
						detalle: data.response
					});
				} catch {}
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			
			setUser_token: token => {
				setStore({ user_token: token });
			}
			
		}
	};
};

export default getState;