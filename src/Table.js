import React, { useEffect, useState, useCallback } from 'react';

import CheckBox from './CheckBox';
import Card from './components/Card';

const users = ['Vincent', 'Quentin', 'Geoffrey'];

const initTotalUsers = () => users.map((user) => ({
  name: user,
  total: 0.0,
}));

const Table = ({ data }) => {
  const [total, setTotal] = useState(0.0);
  const [totalUsers, setTotalUsers] = useState(initTotalUsers());
  const [checkedItems, setCheckedItems] = useState(new Map());

  useEffect(() => {
    let totalCalculated = 0.0;
    data.data.map(({ prix }, index) => {
      totalCalculated += parseFloat(prix);
    });
    setTotal(Number((totalCalculated).toFixed(2)));
  }, []);

  const handleChange = useCallback(({ target: { name, checked } }) => {
    setCheckedItems((prevState) => {
      const map = new Map(prevState);
      map.set(name, checked);
      if (!checked) { map.set(`all-${getIndexFromName(name)}`, checked); }

      if (getSumCheckedByProduct(map, getIndexFromName(name)) === users.length) { map.set(`all-${getIndexFromName(name)}`, checked); }

      calculTotal(map);
      return map;
    });
  }, []);

  const handleAllChange = useCallback(({ target: { name, checked } }) => {
    setCheckedItems((prevState) => {
      const map = new Map(prevState);
      users.map((user) => {
        map.set(`${user}-${getIndexFromName(name)}`, checked);
      });
      map.set(name, checked);
      calculTotal(map);
      return map;
    });
  }, []);

  const getIndexFromName = (name) => name.split('-')[1];

  const calculTotal = (map) => {
    const total = users.map((user) => ({
      name: user,
      total: calculTotalByName(map, user),
    }));
    setTotalUsers(total);
  };

  const calculTotalByName = (map, name) => {
    let total = 0;
    data.data.map((el, i) => {
      if (map.get(`${name}-${i}`)) { total += getPricePerProduct(map, i); }
    });
    return Number((total).toFixed(2));
  };

  const getPricePerProduct = (map, productIndex) => {
    const productPrice = parseFloat(data.data[productIndex].prix);
    const numberOfChecks = getSumCheckedByProduct(map, productIndex);

    return numberOfChecks === 0 ? 0 : productPrice / numberOfChecks;
  };

  const getSumCheckedByProduct = (map, productIndex) => {
    let sum = 0;
    users.map((user) => {
      if (map.get(`${user}-${productIndex}`)) { sum++; }
    });
    return sum;
  };

  const renderTable = () => data.data.map((el, index) => {
    const { name, prix } = el;

    return (
      <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap"><p className="text-sm text-gray-900 text-left">{name}</p></td>
        <td className="px-6 py-4 whitespace-nowrap"><p className="text-sm text-gray-900 text-center">{prix}</p></td>
        {users.map((el) => (
          <td className="px-6 py-4 whitespace-nowrap"><CheckBox name={`${el}-${index}`} checked={checkedItems.get(`${el}-${index}`)} onChange={handleChange} /></td>
        ))}
        <td className="px-6 py-4 whitespace-nowrap"><CheckBox name={`all-${index}`} checked={checkedItems.get(`all-${index}`)} onChange={handleAllChange} /></td>
      </tr>
    );
  });
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-50">
                  <tr className="bg-gray-50">
                    <th scope="col" className="bg-gray-50 sticky top-0 z-10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nom de l'article
                    </th>
                    <th scope="col" className="bg-gray-50 sticky top-0 z-10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                    {users.map((el) => (
                      <th scope="col" className="bg-gray-50 sticky top-0 z-10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{el}</th>
                    ))}
                    <th scope="col" className="bg-gray-50 sticky top-0 z-10 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tous
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {renderTable()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        {totalUsers.map(({ name, total }) => (<Card name={name} sum={total} />))}
      </div>

      <div className="flex mt-10 justify-center mb-10">
        <Card name="Total" sum={total} />
        <Card
          name="Vérification Total"
          sum={totalUsers.reduce((prev, cur) => Number((prev + cur.total).toFixed(2)), 0)}
        />
      </div>

    </>
  );
};

export default Table;
