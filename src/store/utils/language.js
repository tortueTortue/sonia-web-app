const state = {
    // selectedLanguage: textEnglish,
    textEnglish : new Map([
                    ['Dark_mode', 'Dark mode'], 
                    ['Lefty', 'Lefty'], 
                    ['Killswitch_Top', 'Killswitch Top'], 
                    ['Settings', 'Settings'], 
                    ['Options', 'Options'], 
                    ['Layouts', 'Layouts'], 
                    ['Delete', 'Delete'], 
                    ['No_layout', 'There is no layouts.'], 
                    ['Setting_Layout', 'Setting Layout'], 
                    ['Setting_Layout_message', 'Are you sure you want to <b>set</b> this layout? '],
                    ['Add_Layout', 'Add Layout'],
                    ['Layout_toast', 'Layout loaded!'],
                    ['Deleting_Layout', 'Deleting Layout'],
                    ['Deleting_Layout_message', 'Are you sure you want to <b>delete</b> this layout? You won`t be able to get it back if you do this.'],
                    ['Delete_Layout_toast', 'Layout deleted!'],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                ]),
    textFrench: new Map([[1, 2], [2, 3], [4, 5]])
}

const mutations = {}

export default {
    state,
    mutations
}