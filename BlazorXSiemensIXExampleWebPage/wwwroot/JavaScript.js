//Is a file global variable to access the toast import
var toast;

//Saves the toast import in a file global variable
//Gets calles from the index.html file located in the wwwroot directory
function ToastInit(_toast) {
    toast = _toast;
}

//uses the toast variable to execute further pre declared functions to show the toast message
function ShowToast(Message) {
    toast({
        message: Message,
    });
}

//Toggles the drawer visibility
async function ToggleDrawer(drawer) {
    drawer.show = !drawer.show;
}

//Adds a event listener to the infobox to show a toast when getting closed
function InfoBoxClosingSequenceInit(InfoBox) {
    InfoBox.addEventListener("closedChange", () => { ShowToast("InfoBox Closed") });
}

function CategoryFilterInit(categoryFilter) {
    const repeatCategories = false;
    const filterState = {
        tokens: ['Custom filter text'],
        categories: [
            {
                id: 'ID_1',
                value: 'IBM',
                operator: 'Not equal',
            },
        ],
    };
    const categories = {
        ID_1: {
            label: 'Vendor',
            options: ['Apple', 'MS', 'Siemens'],
        },
        ID_2: {
            label: 'Product',
            options: ['iPhone X', 'Windows', 'APS'],
        },
    };

    categoryFilter.repeatCategories = repeatCategories;
    categoryFilter.filterState = filterState;
    categoryFilter.categories = categories;
}

function ChipInit() {
    var chips = document.getElementsByTagName("ix-chip");
    for (var i = 0; i < chips.length; i++) {
        if (chips[i].closable)
            chips[i].addEventListener("close", () => RemoveChip(chips[i]));
    }
}

function RemoveChip(Chip) {

}