const getGroup = () => {
    const tabgroups = chrome.tabGroups.get(); 
    return tabgroups; 
}

export {
    getGroup
}