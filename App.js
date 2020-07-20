/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, { Component } from  'react';
import { Router, Scene }    from  'react-native-router-flux';
import Loading              from  './Loading';
import Language_Menu        from  './Language_Menu';

import SongListAssamese     from  './SongListAssamese';
import SongListBengali      from  './SongListBengali';
import SongListChinese      from  './SongListChinese';
import SongListEnglish      from  './SongListEnglish';
import SongListGreek        from  './SongListGreek';
import SongListGujarathi    from  './SongListGujarathi';
import SongListHebrew       from  './SongListHebrew';
import SongListHindi        from  './SongListHindi';
import SongListJapanese     from  './SongListJapanese';
import SongListKannada      from  './SongListKannada';
import SongListKorean       from  './SongListKorean';
import SongListKrygz        from  './SongListKrygz';
import SongListMalayalam    from  './SongListMalayalam';
import SongListOdiya        from  './SongListOdiya';
import SongListPunjabi      from  './SongListPunjabi';
import SongListRussian      from  './SongListRussian';
import SongListSinhala      from  './SongListSinhala';
import SongListTamil        from  './SongListTamil';
import SongListTelugu       from  './SongListTelugu';
import SongListThai         from  './SongListThai';
import SongListTibetan      from  './SongListTibetan';


import Song                 from './Song';



export default class App extends Component{
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Loading" component={Loading}  hideNavBar={true}  initial={true} />
           <Scene key="Lang_Menu" component={Language_Menu}  hideNavBar={true}  initial={false} />
           <Scene key="Song" component={Song} hideNavBar={true} initial={false} />
            

              
              <Scene key="SongListAssamese" component={SongListAssamese}  hideNavBar={true}  initial={false} />             
              <Scene key="SongListBengali" component={SongListBengali}  hideNavBar={true}  initial={false} />
              <Scene key="SongListChinese" component={SongListChinese}  hideNavBar={true}  initial={false} />
              <Scene key="SongListEnglish" component={SongListEnglish}  hideNavBar={true}  initial={false} />
              <Scene key="SongListGreek" component={SongListGreek}  hideNavBar={true}  initial={false} />
              <Scene key="SongListGujarathi" component={SongListGujarathi}  hideNavBar={true}  initial={false} />
              <Scene key="SongListHebrew" component={SongListHebrew}  hideNavBar={true}  initial={false} />
              <Scene key="SongListHindi" component={SongListHindi}  hideNavBar={true}  initial={false} />   
              <Scene key="SongListJapanese" component={SongListJapanese}  hideNavBar={true}  initial={false} />              
              <Scene key="SongListKannada" component={SongListKannada}  hideNavBar={true}  initial={false} />
              <Scene key="SongListKorean" component={SongListKorean}  hideNavBar={true}  initial={false} />
              <Scene key="SongListKrygz" component={SongListKrygz}  hideNavBar={true}  initial={false} />
              <Scene key="SongListMalayalam" component={SongListMalayalam}  hideNavBar={true}  initial={false} />
              <Scene key="SongListOdiya" component={SongListOdiya}  hideNavBar={true}  initial={false} />
              <Scene key="SongListPunjabi" component={SongListPunjabi}  hideNavBar={true}  initial={false} />
              <Scene key="SongListRussian" component={SongListRussian}  hideNavBar={true}  initial={false} />
              <Scene key="SongListSinhala" component={SongListSinhala}  hideNavBar={true}  initial={false} />
              <Scene key="SongListTamil" component={SongListTamil}  hideNavBar={true}  initial={false} />
              <Scene key="SongListTelugu" component={SongListTelugu}  hideNavBar={true}  initial={false} />
              <Scene key="SongListThai" component={SongListThai}  hideNavBar={true}  initial={false} />
              <Scene key="SongListTibetan" component={SongListTibetan}  hideNavBar={true}  initial={false} />
                 
            </Scene>
      </Router>

    );
  }
}
