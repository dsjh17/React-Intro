import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Cars() {
    const [car, setCar] = useState(null);
    const [selected, setSelected] = useState("");
    const [final, setFinal] = useState([]);
    let carName = [];
    let carCategory = [];


    useEffect(() => {
        fetch(
            "https://gist.githubusercontent.com/seankross/a412dfbd88b3db70b74b/raw/5f23f993cd87c283ce766e7ac6b329ee7cc2e1d1/mtcars.csv"
        )
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
                setCar(data); //string 
            });
    }, []);

    const carArray = car?.split("\n"); //array
    console.log(carArray)
    carArray?.forEach((carRow, index) => {
        const carColumns = carRow.split(",");
        if (index !== 0) {
            carName.push(carColumns[0]); //array of car names
        }
        else carCategory.push(carColumns);
    });
    carName.sort()
    carCategory = carCategory[0] //array of car categories i.e. 1st row
    console.log(carCategory)
    useEffect(() => {
        if (selected) {
            const carArray = car?.split("\n");
            const newFinal = [];
            carArray?.forEach((carRow, index) => {
                const carColumns = carRow.split(",");
                if (index !== 0 && carColumns[0] === selected) {
                    newFinal.push(carColumns);
                }
            });
            setFinal(newFinal[0]);
        } 
    }, [car, selected]);

    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        {selected || "Car Names"}
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {carName.map((name) => (
                                <Menu.Item key={name}
                                >
                                    {({ active }) => (
                                        <a
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'no-underline text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            onClick={() => {
                                                setSelected(name)
                                            }}
                                        >
                                            {name}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <ListGroup>
                {carCategory?.map((category, index) => (
                    <ListGroup.Item key={index}>
                        {category} : {final[index]}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
