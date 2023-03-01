import { ref } from "vue";
import { useRequest } from "vue-request";
import axios from "axios";

const chuckFacts = ref([]);
const searchTerm = 'computer';
const api = axios.create({ baseURL: "https://api.chucknorris.io", });

const getChuckFact = () => {
    return api.get("/jokes/search?query=" + searchTerm);
}

const useChucks = () => {
    const factoid = useRequest(getChuckFact);
    chuckFacts.value = factoid;
    const tempdata = chuckFacts;
    return { tempdata };
};
export default useChucks