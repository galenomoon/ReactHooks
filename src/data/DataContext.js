import React from "react";


export const data ={ //Exporting data
number:123,
text: 'Context API...'
}

export const DataContext = React.createContext(data) //exporting DataContext

export default DataContext