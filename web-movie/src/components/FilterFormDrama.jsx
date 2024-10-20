const FilterFormDrama = () => {
    return (
        <form className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex space-x-4 justify-start items-center mb-4 gap-4">
                <div className="flex-1 flex items-center space-x-4">
                    <label className="mr-4">Filtered By :</label>
                    <select className="border rounded-lg p-2 bg-gray-700">
                        <option>None</option>
                        <option>Approved</option>
                        <option>Unapproved</option>
                    </select>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                    <label className="mr-4">Shows :</label>
                    <select className="border rounded-lg p-2 bg-gray-700">
                        <option>10</option>
                    </select>
                </div>
                <div className="flex-1 justify-self-end space-x-4">
                    <input
                        type="text"
                        placeholder="Search Comment"
                        className="border rounded-lg p-2 w-3/4 mr-4 text-black"
                        id="search-comment"
                    />
                </div>
            </div>
        </form>
    );
};

export default FilterFormDrama;