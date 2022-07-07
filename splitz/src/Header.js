import React from "react";


function Header(){
    return(
        <div className="flex flex-col w-full justify-start ">
                <h2 className="max-width-fit w-fit m-5 mb-0 font-mono text-4xl font-bold">Splitz</h2>
                <h2 className="max-width-fit w-fit m-5 mt-0 font-mono text-sm">Simple way to split expenses</h2>
        </div>
    );
}

export default Header;