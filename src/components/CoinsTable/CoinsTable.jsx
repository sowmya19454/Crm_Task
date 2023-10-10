import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../../config/api';
import { CryptoState } from '../../CryptoContext';
import SearchTable from './SearchTable';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const { currency, symbol } = CryptoState()

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchCoins();
      
    }, [])

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <SearchTable filteredCoins={filteredCoins} loading={loading} symbol={symbol} handleSearchChange={handleSearchChange} />
    )
}

export default CoinsTable