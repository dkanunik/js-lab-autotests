import AppConfig from '../configs/AppConfig';

import axios from 'axios';

class FinanceModel {

    static async getFinanceData() {
        const params = 'chart/AAPL?region=US&lang=en-US&includePrePost=false&interval=2m&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance';
        try {
            return await axios.get(AppConfig.baseUrl + params);
        } catch (e) {
            return e.response;
        }
    }
}

export default FinanceModel;
