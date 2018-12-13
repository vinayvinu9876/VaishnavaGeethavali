
import React,{Component} from 'react';
import {Text,StyleSheet,View,Image,ScrollView,BackHandler,TouchableNativeFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Title from './Title';
import Item from './Item';


export default class SongListEnglish extends Component{

  handle_back_press=()=>
  {
    
    Actions.Lang_Menu();
    return true;
  }
 
  componentDidMount() {
    
    BackHandler.addEventListener('hardwareBackPress',this.handle_back_press);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.handle_back_press);
  }


  render(){

    A_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="A" || song_data[i].title[0]=="Ā"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

     B_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="B"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    D_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="D"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    G_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="G"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

     H_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="H"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    I_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="I"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    J_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="J"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });
     K_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="K"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    L_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="L"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    M_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="M"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

    N_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="N"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

     O_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="O"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

     P_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="P"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

     R_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="R"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

      S_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="S" || song_data[i].title[0]=="Ṣ" || song_data[i].title[0]=="Ś"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });

       T_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="T"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });


      

        V_list=song_data.map((a,i)=>{    
      if(song_data[i].title[0]=="V"){        
        return <Item key={i} item={song_data[i].title} nxt={()=>Actions.Song({title:song_data[i].title,lyrics:song_data[i].song,isEnglish:true})}/>
      }
    });










    return(

      <View style={styles.container} >


      <View style={styles.header}>
        <Image style={styles.logo} source={require('./prabhupad1.jpg')} />
        <Text style={styles.menu_text}>Vaishnava Gitavali</Text>

      </View>
      <ScrollView style={styles.contentContainer}>
      
        <Title title={'A'} />
            {A_list}          
        <Title title={'B'} />
          {B_list}
        <Title title={'D'} />
          {D_list}
        <Title title={'G'} />
         {G_list}
        <Title title={'H'} />
          {H_list}
        <Title title={'I'} />
          {I_list}
        <Title title={'J'} />
          {J_list}
        <Title title={'K'} />
          {K_list}
        <Title title={'L'} />
          {L_list}
        <Title title={'M'} /> 
          {M_list}
        <Title title={'N'} />
          {N_list}
       <Title title={'O'} />
            {O_list}
      <Title title={'P'} />
          {P_list} 
      <Title title={'R'} />
          {R_list}
      <Title title={'S'} /> 
         {S_list}
      <Title title={'T'} />
          {T_list}
      <Title title={'V'} />
          {V_list}
      </ScrollView>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  header:{
    flex:1,
    maxHeight: '12%',
    backgroundColor: 'black',
    flexDirection: 'row' , 
  },
  logo:{
    marginTop: '3%',
    marginLeft: '2%',
    borderRadius: 80,
    maxWidth: '15%',
    maxHeight: '75%',

  },
  menu_text:{
    fontSize:25,
    color:'white',
    marginTop: '6%',
    marginLeft: '3%',
    fontWeight: 'normal' ,
    fontFamily: 'DonegalOne-Regular',
  },
  
  contentContainer: {
  flex:1,
    
  },



});


const song_data=

[
{
  title:"Abhidheyādhideva praṇāma",
  song:["\ndīvyad-vṛndāraṇya-kalpa-drumādhaḥ\nśrīmad-ratnāgāra-siṁhāsana-sthau\nśrīmad-rādhā-śrīla-govinda-devau\npreṣṭhālībhiḥ sevyamānau smarāmi\n"],
},

{
title:"Āmār Jīvan",
song:['\nāmāra jīvana, sadā pāpe rata,\nnāhiko puṇyera leṣa\nparere udvega, diyāchi ye koto,\ndiyāchi jīvere kleśa\n',
     'nija sukha lāgi’, pāpe nāhi ḍori,\ndayā-hīna svārtha-paro\npara-sukhe duḥkhī, sadā mithya-bhāṣī,\npara-duḥkha sukha-karo\n',
     'āśeṣa kāmanā, hṛdi mājhe mora,\nkrodhī, dambha-parāyaṇa\nmada-matta sadā, viṣaye mohita,\nhiṁsā-garva vibhūṣaṇa\n',
     'nidrālasya hata, sukārye virata,\nakārye udyogī āmi\npratiṣṭha lāgiyā, śāṭhya-ācaraṇa,\nlobha-hata sadā kāmī\n',
     'e heno durjana, saj-jana-varjita,\naparādhi nirantara\nśubha-kārya-śūnya, sadānartha-manāḥ,\nnānā duḥkhe jara jara\n',
     'bārdhakye ekhona, upāya-vihīna,\ntā’te dīna akiñcana\nbhakativinoda, prabhura caraṇe,\nkore duḥkha nivedana']
},

{
title:"Anādi Karama Phale",
song:['\nanādi’ karama-phale, paḍi’ bhavārṇara jale,\ntaribāre nā dekhi upāya\nei viṣaya-halāhale, divā-niśi hiyā jvale,\nmana kabhu sukha nāhi pāya\n',
      'āśā-pāśa-śata-śata, kleśa deya avirata,\npravṛtti-ūrmira tāhe khelā\nkāma-krodha-ādi chaya, bāṭapāḍe deya bhaya,\navasāna hoilo āsi’ belā\n',
      'jnāna-karma-ṭhaga dui, more pratārīya loi,\navaśeṣe phele sindhu-jale\ne heno samaye, bandhu, tumi kṛṣṇa kṛpā-sindhu,\nkṛpā kori’ tolo more bale\n',
      'patita-kiṅkare dhari’, pāda-padma-dhuli kari’,\ndeho bhaktivinoda āśraya\nāmi tava nitya-dāsa, bhuliyā māyāra pāśa,\nbaddha ho’ye āchi dayāmaya\n']
},

{
title:"Bhajahū Re Mana",
song:['\nbhajahū re mana śrī-nanda-nandana\nabhaya-caraṇāravinda re\ndurlabha mānava-janama sat-saṅge\ntaroho e bhava-sindhu re\n',
      'śīta ātapa bāta bariṣaṇa\ne dina jāminī jāgi re\nbiphale sevinu kṛpaṇa durajana\ncapala sukha-laba lāgi’ re\n',
      'e dhana, yaubana, putra, parijana\nithe ki āche paratīti re\nkamala-dala-jala, jīvana ṭalamala\nbhajahū hari-pada nīti re\n',
      'śravaṇa, kīrtana, smaraṇa, vandana,\npāda-sevana, dāsya re\npūjana, sakhī-jana, ātma-nivedana\ngovinda-dāsa-abhilāṣa re\n']
},

{
title:"Śrī Bhaktivinoda praṇāma",
song:['\nnamo bhaktivinodāya sac-cid-ānanda-nāmine\ngaura-śakti-svarūpāya rūpānuga-varāya te\n'],
},

{
title:"Bhoga-ārati",
song:['\nbhaja bhakata-vatsala śrī-gaurahari\nśrī-gaurahari sohi goṣṭha-bihārī\nnanda-jaśomatī-citta-hari\n',
      'belā ho’lo dāmodara āisa ekhano\nbhoga-mandire bosi’ koraho bhojana\n',
      'nandera nideśe baise giri-bara-dhārī\nbaladeva-saha sakhā baise sāri sāri\n',
      'śuktā-śākādi bhāji nālitā kuṣmāṇḍa\ndāli dālnā dugdha-tumbī dadhi mocā-khaṇḍa\n',
      'luci cini sarpurī lāḍḍu rasābalī\nbhojana korena kṛṣṇa ho’ye kutūhalī\n',
      'rādhikāra pakka anna vividha byañjana\nparama ānande kṛṣṇa korena bhojana\n',
      'bhojanānte piye kṛṣṇa subāsita bāri\nsabe mukha prakhāloy ho’ye sāri sāri\n',
      'hasta-mukha prakhāliyā jata sakhā-gaṇe\nānande biśrāma kore baladeva-sane\n',
      'jambula rasāla āne tāmbūla-masālā\ntāhā kheye kṛṣṇa-candra sukhe nidrā gelā\n',
      'biśālākha śikhi-puccha-cāmara ḍhulāya\napūrba śayyāya kṛṣṇa sukhe nidrā jāya\n',
      'jaśomatī-ājñā pe’ye dhaniṣṭhā-ānīto\nśrī-kṛṣṇa-prasāda rādhā bhuñje ho’ye prīto\n',
      'lalitādi sakhī-gaṇa avaśeṣa pāya\nmane mane sukhe rādhā-kṛṣṇa-guṇa gāya\n',
      'hari-līlā ek-mātra jāhāra pramoda\nbhogārati gāy ṭhākur bhakativinoda\n',]
},

{
title:"Śrī Brahma-saṁhitā",
song:['\nīśvaraḥ paramaḥ kṛṣṇaḥ sac-cid-ānanda-vigrahaḥ\nanādir ādir govindaḥ sarva-kāraṇa-kāraṇam\n',
      'cintāmaṇi-prakara-sadmasu kalpa-vṛkṣa-\nlakṣāvṛteṣu surabhīr abhipālayantam\nlakṣmī-sahasra-śata-sambhrama-sevyamānaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'veṇuṁ kvanantam aravinda-dalāyatākṣaṁ\nbarhāvataṁsam asitāmbuda-sundarāṅgam\nkandarpa-koṭi-kamanīya-viśeṣa-śobhaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'ālola-candraka-lasad-vanamālya-vaṁśī-\nratnāṅgadaṁ praṇaya-keli-kalā-vilāsam\nśyāmaṁ tri-bhaṅga-lalitaṁ niyata-prakāśaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n\n',
      'aṅgāni yasya sakalendriya-vṛtti-manti\npaśyanti pānti kalayanti ciraṁ jaganti\nānanda-cinmaya-sad-ujjvala-vigrahasya\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'advaitam acyutam anādim ananta-rūpam\nādyaṁ purāṇa-puruṣaṁ nava-yauvanaṁ ca\nvedeṣu durlabham adurlabham ātma-bhaktau\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'panthās tu koṭi-śata-vatsara-sampragamyo\nvāyor athāpi manaso muni-puṅgavānām\nso ‘py asti yat-prapada-sīmny avicintya-tattve\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'eko ‘py asau racayituṁ jagad-aṇḍa-koṭiṁ\nyac-chaktir asti jagad-aṇḍa-cayā yad antaḥ\naṇḍāntara-stha-paramāṇu-cayāntara-sthaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yad-bhāva-bhāvita-dhiyo manujās tathaiva\nsamprāpya rūpa-mahimāsana-yāna-bhūṣāḥ\nsūktair yam eva nigama-prathitaiḥ stuvanti\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'ānanda-cinmaya-rasa-pratibhāvitābhis\ntābhir ya eva nija-rūpatayā kalābhiḥ\ngoloka eva nivasaty akhilātma-bhūto\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'premāñjana-cchurita-bhakti-vilocanena\nsantaḥ sadaiva hṛdayeṣu vilokayanti\nyaṁ śyāmasundaram acintya-guṇa-svarūpaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'rāmādi-mūrtiṣu kalā-niyamena tiṣṭhan\nnānāvatāram akarod bhuvaneṣu kintu\nkṛṣṇaḥ svayaṁ samabhavat paramaḥ pumān yo\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yasya prabhā-prabhavato jagad-aṇḍa-koṭi-\nkoṭīṣv aśeṣa-vasudhādi-vibhūti-bhinnam\ntad brahma niṣkalam anantam aśeṣa-bhūtaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'māyā hi yasya jagad-aṇḍa-śatāni sūte\ntraiguṇya-tad-viśaya-veda-vitāyamānā\nsattvāvalambi-para-sattva-viśuddha-sattvaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'ānanda-cinmaya-rasātmatayā manaḥsu\nyaḥ prāṇināṁ pratiphalan smaratām upetya\nlīlāyitena bhuvanāni jayaty ajasraṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'goloka-nāmni nija-dhāmni tale ca tasya\ndevī-maheśa-hari-dhāmasu teṣu teṣu\nte te prabhāva-nicayā vihitās ca yena\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'sṛṣṭi-sthiti-pralaya-sādhana-śaktir ekā\nchāyeva yasya bhuvanāni bibharti durgā\nicchānurūpam api yasya ca ceṣṭate sā\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'kṣīraṁ yathā dadhi vikāra-viśeṣa-yogāt\nsañjāyate na hi tataḥ pṛthag asti hetoḥ\nyaḥ śambhutām api tathā samupaiti kāryād\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'dīpārcir eva hi daśāntaram abhyupetya\ndīpāyate vivṛta-hetu-samāna-dharmā\nyas tādṛg eva hi ca viṣṇutayā vibhāti\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yaḥ kāraṇārnava-jale bhajati sma yoga-\nnidrām ananta-jagad-aṇḍa-sa-roma-kūpaḥ\nādhāra-śaktim avalambya parāṁ sva-mūrtiṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yasyaika-niśvasita-kālam athāvalambya\njīvanti loma-vila-jā jagad-aṇḍa-nāthāḥ\nviṣṇur mahān sa iha yasya kalā-viśeṣo\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'bhāsvān yathāśma-śakaleṣu nijeṣu tejaḥ\nsvīyaṁ kiyat prakatayaty api tadvad atra\nbrahmā ya eṣa jagad-aṇḍa-vidhāna-kartā\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yat-pāda-pallava-yugaṁ vinidhāya kumbha-\ndvandve praṇāma-samaye sa gaṇādhirājaḥ\nvighnān vihantum alam asya jagat-trayasya\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'agnir mahī gaganam ambu marud diśaś ca\nkālas tathātma-manasīti jagat-trayāṇi\nyasmād bhavanti vibhavanti viśanti yaṁ ca\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yac-cakṣur eṣa savitā sakala-grahāṇāṁ\nrājā samasta-sura-mūrtir aśeṣa-tejāḥ\nyasyājñayā bhramati sambhṛta-kāla-cakro\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'dharmo ‘tha pāpa-nicayāḥ śrutayas tapāṁsi\nbrahmādi-kīṭa-patagāvadhayaś ca jīvāḥ\nyad-datta-mātra-vibhava-prakaṭa-prabhāvā\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yas tv indra-gopam athavendram aho sva-karma-\nbandhānurūpa-phala-bhājanam ātanoti\nkarmāṇi nirdahati kintu ca bhakti-bhājāṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'yaṁ krodha-kāma-sahaja-praṇayādi-bhīti-\nvātsalya-moha-guru-gaurava-sevya-bhāvaiḥ\nsañcintya tasya sadṛṣīṁ tanum āpur ete\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'śriyaḥ kāntā kāntaḥ parama-puruṣaḥ kalpa-taravo\ndrumā bhūmiś cintāmaṇi-gaṇa-mayī toyam amṛtam\nkathā gānaṁ nāṭyaṁ gamanam api vaṁśī priya-sakhī\ncid-ānandaṁ jyotiḥ param api tad āsvādyam api ca\n',
      'sa yatra kṣīrābdhiḥ sravati surabhibhyaś ca su-mahān\nnimeśārdhākhyo vā vrajati na hi yatrāpi samayaḥ\nbhaje śvetadvīpaṁ tam aham iha golokam iti yaṁ\nvidantas te santaḥ kṣiti-virala-cārāḥ katipaye\n',]
},

{
title:"Dainya O Prapatti- Hari He Doyāl Mor",
song:['\nhari he doyāl mor jaya rādhā-nāth\nbāro bāro ei-bāro loho nija sāth\n',
      'bahu yoni bhrami’ nātha! loinu śaraṇ\nnija-gue kṛpā koro’ adhama-tāraṇ\n',
      'jagata-kāraṇa tumi jagata-jīvan\ntomā chāḍā kār nāhi he rādhā-ramaṇ\n',
      'bhuvana-maṅgala tumi bhuvaner pati\ntumi upekhile nātha, ki hoibe gati\n',
      'bhāviyā dekhinu ei jagata-mājhāre\ntomā binā keho nāhi e dāse uddhāre\n',]
},

{
title:"Śrī Dāmodaraṣṭaka",
song:['\nnamāmīśvaraṁ sac-cid-ānanda-rūpaṁ\nlasat-kuṇḍalaṁ gokule bhrājamanam\nyaśodā-bhiyolūkhalād dhāvamānaṁ\nparāmṛṣṭam atyantato drutya gopyā\n',
      'rudantaṁ muhur netra-yugmaṁ mṛjantam\nkarāmbhoja-yugmena sātaṅka-netram\nmuhuḥ śvāsa-kampa-trirekhāṅka-kaṇṭha-\nsthita-graivaṁ dāmodaraṁ bhakti-baddham\n',
      'itīdṛk sva-līlābhir ānanda-kuṇḍe\nsva-ghoṣaṁ nimajjantam ākhyāpayantam\ntadīyeṣita-jñeṣu bhaktair jitatvaṁ\npunaḥ prematas taṁ śatāvṛtti vande\n',
      'varaṁ deva mokṣaṁ na mokṣāvadhiṁ vā\nna canyaṁ vṛṇe ‘haṁ vareṣād apīha\nidaṁ te vapur nātha gopāla-bālaṁ\nsadā me manasy āvirāstāṁ kim anyaiḥ\n',
      'idaṁ te mukhāmbhojam atyanta-nīlair\nvṛtaṁ kuntalaiḥ snigdha-raktaiś ca gopyā\nmuhuś cumbitaṁ bimba-raktādharaṁ me\nmanasy āvirāstām alaṁ lakṣa-lābhaiḥ\n',
      'namo deva dāmodarānanta viṣṇo\nprasīda prabho duḥkha-jālābdhi-magnam\nkṛpā-dṛṣṭi-vṛṣṭyāti-dīnaṁ batānu\ngṛhāṇeṣa mām ajñam edhy akṣi-dṛśyaḥ\n',
      'kuverātmajau baddha-mūrtyaiva yadvat\ntvayā mocitau bhakti-bhājau kṛtau ca\ntathā prema-bhaktiṁ svakāṁ me prayaccha\nna mokṣe graho me ‘sti dāmodareha\n',
      'namas te ‘stu dāmne sphurad-dīpti-dhāmne\ntvadīyodarāyātha viśvasya dhāmne\nnamo rādhikāyai tvadīya-priyāyai\nnamo ‘nanta-līlāya devāya tubhyam\n',]
},

{
title:"Śrī Daśāvatāra-stotra",
song:['\npralaya-payodhi-jāle dhṛtavān asi vedaṁ\nvihita-vahitra-caritram akhedam\nkeśava dhṛta-mīna-śarīra jaya jagadīśa hare\n',
      'kṣitir iha vipulatare tiṣṭhati tava pṛṣṭhe\ndharaṇi-dhāraṇa-kiṇa-cakra-gariṣṭhe\nkeśava dhṛta-kūrma-śarīra jaya jagadīśa hare\n',
      'vasati daśana-śikhare dharaṇī tava lagnā\nśaśini kalaṅka-kaleva nimagnā\nkeśava dhṛta-śūkara-rūpa jaya jagadīśa hare\n',
      'tava kara-kamala-vare nakham adbhuta-śṛṅgaṁ\ndalita-hiraṇyakaśipu-tanu-bhṛṅgam\nkeśava dhṛta-narahari-rūpa jaya jagadīśa hare\n',
      'chalayasi vikramaṇe balim adbhuta-vāmana\npada-nakha-nīra-janita-jana-pāvana\nkeśava dhṛta-vāmana-rūpa jaya jagadīśa hare\n',
      'kṣatriya-rudhira-maye jagad-apagata-pāpam\nsnapayasi payasi śamita-bhava-tāpam\nkeśava dhṛta-bhṛgupati-rūpa jaya jagadiśa hare\n',
      'vitarasi dikṣu raṇe dik-pati-kamanīyaṁ\ndaśa-mukha-mauli-balim ramaṇīyam\nkeśava dhṛta-rāma-śarīra jaya jagadiśa hare\n',
      'vahasi vapuṣi viśade vasanaṁ jaladābhaṁ\nhala-hati-bhīti-milita-yamunābham\nkeśava dhṛta-haladhara-rūpa jaya jagadiśa hare\n',
      'nindāsī yajña-vidher ahaha śruti-jātaṁ\nsadaya-hṛdaya darśita-paśu-ghātam\nkeśava dhṛta-buddha-śarīra jaya jagadīśa hare\n',
      'mleccha-nivaha-nidhane kalayasi karavālaṁ\ndhūmaketum iva kim api karālam\nkeśava dhṛta-kalki-śarīra jaya jagadīśa hare\n',
      'śrī-jayedeva-kaver idam uditam udāraṁ\nśṛṇu sukha-daṁ śubha-daṁ bhava-sāram\nkeśava dhṛta-daśa-vidha-rūpa jaya jagadīśa hare\n',
      'vedān uddharate jaganti vahate bhū-golam udbibhrate\ndaityaṁ dārayate baliṁ chalayate kṣatra-kṣayaṁ kurvate\npaulastyaṁ jayate halaṁ kalayate kāruṇyam ātanvate\nmlecchān mūrchayate daśakṛti-kṛte kṛṣṇāya tubhyaṁ namaḥ\n',]
},

{
title:"Gaurā Pahū",
song:['\ngaurā pahū nā bhajiyā goinu\nprema-ratana-dhana helāya hārāinu\n',
      'adhane yatana kari dhana teyāginu\nāpana karama-doṣe āpani ḍubinu\n',
      'sat-saṅga chāḍi’ kainu asate vilāsa\nte-kāraṇe lāgilo ye karma-bandha-phāṅsa\n',
      'viṣaya-viṣama-viṣa satata khāinu\ngaura-kīrtana-rase magana nā hainu\n',
      'keno vā āchaye prāṇa ki sukha pāiyā\nnarottam dās keno nā gelo mariyā\n',]
},

{
title:"Gaura-ārati",
song:['\n(kiba) jaya jaya gorācānder āratiko śobhā\njāhnavī-taṭa-vane jaga-mana-lobhā\n',
      'dakhiṇe nitāicānd, bāme gadādhara\nnikaṭe adwaita, śrīnivāsa chatra-dhara\n',
      'bosiyāche gorācānd ratna-siṁhāsane\nārati koren brahmā-ādi deva-gaṇe\n',
      'narahari-ādi kori’ cāmara dhulāya\nsañjaya-mukunda-bāsu-ghoṣ-ādi gāya\n',
      'śaṅkha bāje ghaṇṭā bāje bāje karatāla\nmadhura mṛdaṅga bāje parama rasāla\n',
      'bahu-koṭi candra jini’ vadana ujjvala\ngala-deśe bana-mālā kore jhalamala\n',
      'śiva-śuka-nārada preme gada-gada\nbhakativinoda dekhe gorāra sampada\n',]
},

{
title:"Śrī Gaurakiśora praṇāma",
song:['\nnamo gaura-kiśorāya sākṣād-vairāgya-mūrtaye\nvipralambha-rasāmbhode pādāmbujāya te namaḥ\n',]
},

{
title:"Śrī Gaurāṅga praṇāma",
song:['\nnamo mahā-vadānyāya kṛṣṇa-prema-pradāya te\nkṛṣṇāya kṛṣṇa-caitanya-nāmne gaura-tviṣe namaḥ\n',]
},

{
title:"Śrī Śrī Gaura-Nityānander Dayā",
song:['\nparama koruṇa, pahū dui jana\nnitāi gauracandra\nsaba avatāra-sāra śiromaṇi\nkevala ānanda-kanda\n',
      'bhajo bhajo bhāi, caitanya nitāi\nsudṛḍha biśwāsa kori\nviṣaya chāḍiyā, se rase majiyā,\nmukhe bolo hari hari\n',
      'dekho ore bhāi, tri-bhuvane nāi,\nemona doyāla dātā\npaśu pākhī jhure, pāṣāṇa vidare,\nśuni’ jāṅra guṇa-gāthā\n',
      'saṁsāre majiyā, rohili poriyā,\nse pade nahilo āśa\nāpana karama, bhuñjāye śamana,\nkahoye locana-dāsa\n',]
},

{
title:"Gopīnātha",
song:['\nPart I\ngopīnāth, mama nivedana śuno\nviṣayī durjana, sadā kāma-rata,\nkichu nāhi mora guṇa\n',
      'gopīnāth, āmāra bharasā tumi\ntomāra caraṇe, loinu śaraṇa,\ntomāra kiṅkora āmi\n',
      'gopīnāth, kemone śodhibe more\nnā jāni bhakati, karme jaḍa-mati,\nporechi soṁsāra-ghore\n',
      'gopīnāth, sakali tomāra māyā\nnāhi mama bala, jñāna sunirmala,\nswādīna nahe e kāyā\n',
      'gopīnāth, niyata caraṇe sthāna\nmāge e pāmara, kāndiyā kāndiyā,\nkorohe karuṇā dāna\n',
      'gopīnāth, tumi to’ sakali pāro\n','durjane tārite, tomāra śakati,\nke āche pāpīra āro\n',
      'gopīnāth, tumi kṛpā-pārābāra\njīvera kāraṇe, āsiyā prapañce,\nlīlā koile subistāra\n',
      'gopīnāth, āmi ki doṣe done\nasura sakala, pāilo caraṇa,\nvinoda thākilo bosi’\n',
      'Part II\ngopināth, ghucāo saṁsāra jwālā\navidyā-jātanā, āro nāhi sahe,\njanama-maraṇa-mālā\n',
      'gopīnāth, āmi to’ kāmera dāsa\nviṣaya-bāsanā, jāgiche hṛdoye,\nphādiche karama phāsa\n',
      'gopināth, kabe vā jāgibo āmi\nkāma-rūpa ari, dūre teyāgibo,\nhṛdoye sphuribe tumi\n',
      'gopīnāth, āmi to’ tomāra jana\ntomāre chāriyā, saṁsāra bhajinu,\nbhuliyā āpana-dhana\n',
      'gopināth, tumi to’ sakali jāno\nāpanāra jane, daṇḍiyā ekhano,\nśrī-caraṇe aeho sthāno\n',
      'gopīnāth, ei ki vicāra taba\nbimukha dekhiyā, chāro nija-jane,\nna koro’ karuṇā-laba\n',
      'gopīnāth, āmi to mūrakha ati\nkise bhālo hoya, kabhu nā bujhinu,\ntāi heno mama gati\n',
      'gopīnāth, tumi to’ paṇḍita-bara\nmūḍhera maṅgala, tumi anveṣibe,\ne dāse nā bhāvo’ para\n',
      'Part III\ngopīnāth, āmāra upāya nāi\ntumi kṛpā kori’, āmāre loile,\nsaṁsāre uddhāra pāi\n',
      'gopīnāth, porechi māyāra phere\ndhana, dāra, suta, ghireche āmāre,\nkāmete rekheche jere\n',
      'gopīnāth, mana je pāgala mora\nnā māne śāsana, sadā acetana,\nviṣaye ro ‘yeche ghora\n',
      'gopināth, hāra je menechi āmi\naneka jatana, hoilo bifala,\nekhano bharasā tumi\n',
      'gopīnāth, kemone hoibe gati\nprabala indriya, bośī-bhūta mana,\nnā chāre viṣaya-rati\n',
      'gopīnāth, hṛdoye bosiyā mora\nmanake śamiyā, laho nija pāne,\nghucibe vipada ghora\n',
      'gopīnāth, anātha dekhiyā more\ntumi hṛṣīkeśa, hṛṣīka damiyā,\ntāro ‘he saṁsṛti-ghore\n',
      'gopīnāth, galāya legeche phāsa\nkṛpā-asi dhori’, bandhana chediyā,\nvinode koroho dāsa\n',]
},

{
title:"Greeting the deities",
song:['\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'veṇuṁ kvaṇantam aravinda-dalāyatākṣaṁ\nbarhāvataṁsam asitāmbuda-sundarāṅgam\nkandarpa-koṭi-kaminīya-viśeṣa-śobhaṁ\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n',
      'aṅgāni yasya sakalendriya-vṛtti-manti\npaśyanti pānti kalayanti ciraṁ jaganti\nānanda-cinmaya-sad-ujjvala-vigrahasya\ngovindam ādi-puruṣaṁ tam ahaṁ bhajāmi\n'],
},

{
title:"Śrī Guru praṇāma",
song:['\noṁ ajñāna-timirāndhasya\njñānāñjana-śalākayā\ncakṣur unmīlitaṁ yena\ntasmai śrī-gurave namaḥ\n',]
},

{
title:"Gurudeva",
song:['\ngurudev!\nkṛpā-bindu diyā, koro’ ei dāse,\ntṛṇāpekhā ati hīna\nsakala sahane, bala diyā koro’,\nnija-māne spṛhā-hīna\n',
      'sakale sammāna korite śakati,\ndeho’ nātha! jathājatha\ntabe to’ gāibo, hari-nāma-sukhe,\naparādha ha ‘be hata\n',
      'kabe heno kṛpā, labhiyā e jana,\nkṛtārtha hoibe, nātha!\nśakti-buddhi-hīna, āmi ati dīna,\nkoro’ more ātma-sātha\n',
      'jogyatā-vicāre, kichu nāhi pāi,\ntomāra karuṇā-sāra\nkaruṇā nā hoile, kāndiyā kāndiyā,\nprāṇa nā rākhibo āra\n',]
},

{
title:"Śrī Guru-vandanā",
song:['\n(1)\nśrī-guru-caraṇa-padma, kevala-bhakati-sadma,\nbando mui sāvadhāna mate\njāhāra prasāde bhāi, e bhava toriyā jāi,\nkṛṣṇa-prāpti hoy jāhā ha’te\n',
      '(2)\nguru-mukha-padma-vākya, cittete koriyā aikya,\nār nā koriho mane āśā\nśrī-guru-caraṇe rati, ei se uttama-gati,\nje prasāde pūre sarva āśā\n',
      '(3)\ncakhu-dān dilo jei, janme janme prabhu sei,\ndivya jñān hṛde prokāśito\nprema-bhakti jāhā hoite, avidyā vināśa jāte,\nvede gāy jāhāra carito\n',
      '(4)\nśrī-guru karuṇā-sindhu, adhama janāra bandhu,\nlokanāth lokera jīvana\nhā hā prabhu koro doyā, deho more pada-chāyā,\nebe jaśa ghuṣuk tribhuvana\n ',]
},

{
title:"Śrī Śrī Gurv-aṣṭaka",
song:['\n(1)\nsaṁsāra-dāvānala-līḍha-loka-\ntrāṇāya kāruṇya-ghanāghanatvam\nprāptasya kalyāṇa-guṇārṇavasya\nvande guroḥ śrī-caraṇāravindam\n',
      '(2)\nmahāprabhoḥ kīrtana-nṛtya-gīta-\nvāditra-mādyan-manaso rasena\nromāñca-kampāśru-taraṅga-bhājo\nvande guroḥ śrī-caraṇāravindam\n',
      '(3)\nśrī-vigrahārādhana-nitya-nānā-\nśṛṅgāra-tan-mandira-mārjanādau\nyuktasya bhaktāṁś ca niyuñjato ‘pi\nvande guroḥ śrī-caraṇāravindam\n',
      '(4)\ncatur-vidha-śrī-bhagavat-prasāda-\nsvādv-anna-tṛptān hari-bhakta-saṅghān\nkṛtvaiva tṛptiṁ bhajataḥ sadaiva\nvande guroḥ śrī-caraṇāravindam\n',
      '(5)\nśrī-rādhikā-mādhavayor apāra-\nmādhurya-līlā guṇa-rūpa-nāmnām\nprati-kṣaṇāsvādana-lolupasya\nvande guroḥ śrī-caraṇāravindam\n',
      '(6)\nnikuñja-yūno rati-keli-siddhyai\nyā yālibhir yuktir apekṣaṇīyā\ntatrāti-dākṣyād ati-vallabhasya\nvande guroḥ śrī-caraṇāravindam\n',
      '(7)\nsākṣād-dharitvena samasta-śāstrair\nuktas tathā bhāvyata eva sadbhiḥ\nkintu prabhor yaḥ priya eva tasya\nvande guroḥ śrī-caraṇāravindam\n',
      '(8)\nyasya prasādād bhagavat-prasādo\nyasyāprasādān na gatiḥ kuto ‘pi\ndhyāyan stuvaṁs tasya yaśas tri-sandhyaṁ\nvande guroḥ śrī-caraṇāravindam\n']
},

{
title:"Hare Kṛṣṇa Mahā-mantra",
song:['\nHare Kṛṣṇa Hare Kṛṣṇa\nKṛṣṇa Kṛṣṇa Hare Hare\nHare Rāma Hare Rāma\nRāma Rāma Hare Hare\n'],
},

{
title:"Iṣṭa-deve Vijñapti",
song:['\nhari hari! bifale janama goṅāinu\nmanuṣya-janama pāiyā, rādhā-kṛṣṇa nā bhajiyā,\njāniyā śuniyā biṣa khāinu\n',
      'golokera prema-dhana, hari-nāma-saṅkīrtana,\nrati nā janmilo kene tāy\nsaṁsāra-biṣānale, dibā-niśi hiyā jwale,\njurāite nā koinu upāy\n',
      'brajendra-nandana jei, śacī-suta hoilo sei,\nbalarāma hoilo nitāi\ndīna-hīna jata chilo, hari-nāme uddhārilo,\ntāra śākṣī jagāi mādhāi\n',
      'hā hā prabhu nanda-suta, vṛṣabhānu-sutā-juta,\nkoruṇā karoho ei-bāro\nnarottama-dāsa koy, nā ṭheliho rāṅgā pāy,\ntomā bine ke āche āmāra\n',]
},

{
title:"Śrī Jagannātha praṇāma",
song:['\ngaurāvirbhāva-bhūmes tvaṁ nirdeṣṭā saj-jana-priyaḥ\nvaiṣṇava-sārvabhaumaḥ ṣrī-jagannāthāya te namaḥ\n',]
},

{
title:"Jaya Rādhā-Mādhava",
song:['\n(jaya) rādhā-mādhava (jaya) kuñja-bihārī\n(jaya) gopī-jana-vallabha (jaya) giri-vara-dhārī\n(jaya) jaśodā-nandana, (jaya) braja-jana-rañjana,\n(jaya) jāmuna-tīra-vana-cārī\n'],
},

{
title:"Aruṇodaya-kīrtana Part II-Jīv jāgo",
song:['\njīv jāgo, jīv jāgo, gauracānda bole\nkota nidrā yāo māyā-pīśācīra kole\n',
      'bhajibo boliyā ese soṁsāra-bhitore\nbhuliyā rohile tumi avidyāra bhore\n',
      'tomāre loite āmi hoinu avatāra\nāmi vinā bandhu āra ke āche tomāra\n',
      'enechi auṣadhi māyā nāśibāro lāgi’\nhari-nāma mahā-mantra lao tumi māgi’\n',
      'bhakativinoda prabhu-caraṇe poḍiyā\nsei hari-nāma-mantra loilo māgiyā\n',]
},

{
title:"Kabe Śrī Caitanya More Koribena Doyā (in English)",
song:['\nkabe śrī-caitanya more koribena doyā\nkabe āmi paibo vaiṣṇava-pada-chāyā\n',
      'kabe āmi chāḍibo e viṣayābhimān\nkabe viṣṇu-jane āmi koribo sammān\n',
      'gala-bastra kṛtāṅjali vaiṣṇava-nikaṭe\ndante tṛṇa kori’ dāṅḍāibo niṣkapaṭe\n',
      'kāṅdiyā kāṅdiyā jānāibo duḥkha-grām\nsaṁsāra-anala hoite māgibo biśrāma\n',
      'śuniyā āmār duḥkha vaiṣṇava ṭhākur\nāmā lāgi’ kṛṣṇe āvedibena pracur\n',
      'vaiṣṇaver āvedane kṛṣṇa doyāmoy\ne heno pāmara prati ha’bena sadoy\n',
      'vinoder nivedana vaiṣṇava-caraṇe\nkṛpā kori’ saṅge loho ei akiñcane\n\n\n\n\n']
},

{
title:"Kabe Ha’be Bolo",
song:['\nkabe ha’be bolo se-dina āmār\n(āmār) aparādha ghuci’, śuddha nāme ruci,\nkṛpā-bale ha’be hṛdoye sañcār\n',
      'tṛṇādhika hīna, kabe nije māni’,\nsahiṣṇutā-guṇa hṛdoyete āni’\nsakale mānada, āpani amānī,\nho’ye āswādibo nāma-rasa-sār\n',
      'dhana jana āra, kobitā-sundarī,\nbolibo nā cāhi deho-sukha-karī\njanme-janme dāo, ohe gaurahari!\nahaitukī bhakti caraṇe tomār\n',
      '(kabe) korite śrī-kṛṣṇa-nāma uccāraṇa,\npulakita deho gadgada bacana\nbaibarṇya-bepathu ha’be saṅghaṭana,\nnirantara netre ba’be aśru-dhār\n',
      'kabe navadwīpe, suradhunī-taṭe,\ngaura-nityānanda boli’ niṣkapaṭe\nnāciyā gāiyā, berāibo chuṭe,\nbātulera prāya chāriyā bicār\n',
      'kabe nityānanda, more kori ‘doyā,\nchārāibe mora viṣayera māyā\ndiyā more nija-caraṇera chāyā,\nnāmera hāṭete dibe adhikār\n',
      'kinibo, luṭibo, hari-nāma-rasa,\nnāma-rase māti’ hoibo bibaśa\nrasera rasika-caraṇa paraśa,\nkoriyā mojibo rase anibār\n',
      'kabe jībe doyā, hoibe udoya,\nnija-sukha bhuli’ sudīna-hṛdoya\nbhakativinoda, koriyā binoya,\nśrī-ājñā-ṭahala koribe pracār\n    ',
]},

{
title:"Śrī Kṛṣṇa praṇāma",
song:['\nhe kṛṣṇa karuṇā-sindho\ndīna-bandho jagat-pate\ngopeśa gopikā-kānta\nrādhā-kānta namo ‘stu te\n',]
},

{
title:"Lālasāmayī Prārthana",
song:['\n‘gaurāṅga’ bolite habe pulaka-śarīra\n‘hari hari’ bolite nayane ba’ be nīra\n',
      'āra kabe nitāi-cānder koruṇā hoibe\nsaṁsāra-bāsanā mora kabe tuccha ha’be\n',
      'viṣaya chāriyā kabe śuddha ha ‘be mana\nkabe hāma herabo śrī-bṛndābana\n',
      'rūpa-raghunātha-pade hoibe ākuti\nkabe hāma bujhabo se jugala-pīriti\n',
      'rūpa-raghunātha-pade rahu mora āśa\nprārthanā koroye sadā narottama-dāsa\n',]
},

{
title:"Mama Mana Mandire",
song:['\n(refrain) mama mana mandire raha niśi-din\nkṛṣṇa murāri śrī kṛṣṇa murāri\n',
      'bhakti prīti mālā candan\ntumi nio he nio cita-nandan\n',
      'jīvana maraṇa tava pūjā nivedan\nsundara he mana-hārī\n',
      'eso nanda-kumār ār nanda-kumār\nhabe prema-pradīpe ārati tomār\n',
      'nayana jamunā jhare anibār\ntomāra virahe giridhārī\n',
      'bandana gāne tava bajuk jīvana\nkṛṣṇa murāri śrī kṛṣṇa murāri\n',]
},

{
title:"Manaḥ-śikṣā",
song:['\nnitāi-pada-kamala, koṭi-candra-suśītala\nje chāyāy jagata jurāy\nheno nitāi bine bhāi, rādhā-kṛṣṇa pāite nāi\ndṛḍha kori’ dharo nitāir pāy\n',
      'se sambandha nāhi jā’r, bṛthā janma gelo tā’r\nsei paśu boro durācār\nnitāi nā bolilo mukhe, majilo saṁsāra-sukhe\nvidyā-kule ki koribe tār\n',
      'ahaṅkāre matta hoiyā, nitāi-pada pāsariyā\nasatyere satya kori māni\nnitāiyer koruṇā habe, braje rādhā-kṛṣṇa pābe\ndharo nitāi-caraṇa du’khāni\n',
      'nitāiyer caraṇa satya, tāhāra sevaka nitya\nnitāi-pada sadā koro āśa\nnarottama boro dukhī, nitāi more koro sukhī\nrākho rāṅgā-caraṇera pāśa\n']
},

{
title:"Mānasa Deha Geha",
song:['\nmānasa, deho, geho, jo kichu mor\narpilū tuwā pade, nanda-kiśor!\n',
      'sampade vipade, jīvane-maraṇe\ndāy mama gelā, tuwā o-pada baraṇe\n',
      'mārobi rākhobi-jo icchā tohārā\nnitya-dāsa prati tuwā adhikārā\n',
      'janmāobi moe icchā jadi tor\nbhakta-gṛhe jani janma hau mor\n',
      'kīṭa-janma hau jathā tuwā dās\nbahir-mukha brahma janme nāhi āś\n',
      'bhukti-mukti-spṛhā vihīna je bhakta\nlabhaite tāko saṅga anurakta\n',
      'janaka, jananī, dayita, tanay\nprabhu, guru, pati-tuhū sarva-moy\n',
      'bhakativinoda kohe, śuno kāna!\nrādhā-nātha! tuhū hāmāra parāṇa\n\n',]
},

{
title:"Maṅgalācaraṇa",
song:['\nvande ‘haṁ śrī-guroḥ śrī-yuta-pada-kamalaṁ śrī-gurun vaiṣṇavāṁś ca\nśrī-rūpaṁ sāgrajātaṁ saha-gaṇa-raghunāthānvitaṁ taṁ sa jīvam\nsādvaitaṁ sāvadhūtaṁ parijana-sahitaṁ kṛṣṇa-caitanya-devaṁ\nśrī-rādhā-kṛṣṇa-pādān saha-gaṇa-lalitā- śrī-viśākhānvitāṁś ca\n',]
},

{
title:"Śrī Nāma",
song:['\ngāy gorā madhur sware\nhare kṛṣṇa hare kṛṣṇa kṛṣṇa kṛṣṇa hare hare\nhare rāma hare rāma rāma rāma hare hare\n',
      'gṛhe thāko, vane thāko, sadā ‘hari’ bole’ ḍāko,\nsukhe duḥkhe bhulo nā’ko, vadane hari-nām koro re\n',
      'māyā-jāle baddha ho ‘ye, ācho miche kāja lo ‘ye,\nekhona cetana pe’ye, ‘rādhā-mādhav’ nām bolo re\n',
      'jīvana hoilo śeṣa, nā bhajile hṛṣīkeśa\nbhaktivinodopadeśa, ekbār nām-rase māto re\n',]
},

{
title:"Śrī Nāma-kīrtana",
song:['\nyaśomatī-nandana, braja-baro-nāgara,\ngokula-rañjana kāna\ngopī-parāṇa-dhana, madana-manohara,\nkāliya-damana-vidhāna\n',
      'amala harinām amiya-vilāsā\nvipina-purandara, navīna nāgara-bora,\nbaṁśī-badana suvāsā\n',
      'braja-jana-pālana, asura-kula-nāśana\nnanda-godhana-rākhowālā\ngovinda mādhava, navanīta-taskara,\nsundara nanda-gopālā\n',
      'yāmuna-taṭa-cara, gopī-basana-hara,\nrāsa-rasika, kṛpāmoya\nśrī-rādhā-vallabha, bṛndābana-naṭabara,\nbhakativinod-āśraya\n',]
},

{
title:"Nāma-saṅkīrtana",
song:['\nhari haraye namaḥ kṛṣṇa yādavāya namaḥ\nyādavāya mādhavāya keśavāya namaḥ\n',
      'gopāla govinda rāma śrī-madhusūdana\ngiridhārī gopīnātha madana-mohana\n',
      'śrī-caitanya-nityānanda śrī-advaita-sītā\nhari guru vaiṣṇaba bhāgavata gītā\n',
      'śrī-rūpa sanātana bhaṭṭa-raghunātha\nśrī-jīva gopāla-bhaṭṭa dāsa-raghunātha\n',
      'ei chay gosāir kori caraṇa vandan\njāhā hoite bighna-nāś abhīṣṭa-pūraṇ\n',
      'ei chay gosāi jār-mui tār dās\ntā-sabāra pada-reṇu mora pañca-grās\n',
      'tādera caraṇa-sebi-bhakta-sane bās\njaname janame hoy ei abhilāṣ\n',
      'ei chay gosāi jabe braje koilā bās\nrādhā-kṛṣṇa-nitya-līlā korilā prakā\n',]
},

{
title:"Nārada Muni Bājāy Vīṇā",
song:['\nnārada muni, bājāy vīṇā\n‘rādhikā-ramaṇa’-nāme\nnāma amani, udita haya,\nbhakata-gītā-sāme\n',
      'amiya-dhārā, bariṣe ghana,\nśravaṇa-yugale giyā\nbhakata jana, saghane nāce,\nbhoriyā āpana hiyā\n',
      'mādhurī-pūra, āsava paśi’,\nmātāya jagata-jane\nkeho vā kānde, keho vā nāce,\nkeho māte mane mane\n',
      'pañca-vadana, nārade dhori’,\npremera saghana rol\nkamalāsana, nāciyā bole,\n‘bolo bolo hari bolo’\n',
      'sahasrānana, parama-sukhe,\n‘hari hari’ boli’ gāya\nnāma-prabhāve, mātilo viśva,\nnāma-rasa sabe pāya\n',
      'śrī-kṛṣṇa-nāma, rasane sphuri’,\npūrā’lo āmār āśa\nśrī-rūpa-pade, yācaye ihā,\nbhakativinoda-dāsa\n',]
},

{
title:"Śrī Narasiṁha-kavaca",
song:['\nnarasimha-kavacaṁ vakṣye prahlādenoditaṁ purā\nsarva-rakṣā-karaṁ puṇyaṁ sarvopadrava-nāśanam\n',
      'sarva-sampat-karaṁ caiva svarga-mokṣa-pradāyakam\ndhyātvā nṛsiṁhaṁ deveśaṁ hema-siṁhāsana-sthitam\n',
      'vivṛtāsyaṁ tri-nayanaṁ śarad-indu-sama-prabham\nlakṣmyāliṅgita-vāmāṅgam vibhūtibhir upāśritam\n',
      'catur-bhujaṁ komalāṅgaṁ svarṇa-kuṇḍala-śobhitam\nśriyāsu-śobhitoraskaṁ ratna-keyūra-mudritam\n',
      'tapta-kāncana-sankāśaṁ pīta-nirmala-vāsasam\nindrādi-sura-mauliṣṭha sphuran māṇikya-dīptibhiḥ\n',
      'virājita-pada-dvandvaṁ śaṅkha-cakrādi-hetibhiḥ\ngarutmatā chavinayāt stūyamānam mudānvitam\n',
      'sva-hṛt-kamala-saṁvāsaṁ kṛtvā tu kavacaṁ pathet\nnṛsiṁho me śirah pātu loka-raksātma-sambhavah\n',
      'sarvago ’pi stambha-vāsaḥ phālaṁ me rakṣatu dhvanim\nnṛsiṁho me dṛśau pātu soma-sūryāgni-locanaḥ\n',
      'smṛtiṁ me pātu nṛhariḥ muni-varya-stuti-priyaḥ\nnāsāṁ me siṁha-nāśas tu mukhaṁ lakṣmī-mukha-priyaḥ\n',
      'sarva-vidyādhipaḥ pātu nṛsiṁho rasanām mama\nvaktraṁ pātv indu-vadanaḥ sadā prahlāda-vanditaḥ\n',
      'nṛsiṁhah pātu me kaṇṭhaṁ skandhau bhū-bharaṇānta-kṛt\ndivyāstra-śobhita-bhujo nṛsiṁhaḥ pātu me bhujau\n',
      'karau me deva-varado nṛsiṁhaḥ pātu sarvataḥ\nhṛdayaṁ yogi-sādhyaś ca nivāsaṁ pātu me hariḥ\n',
      'madhyaṁ pātu hiraṇyāksa-vakṣaḥ-kukṣi-vidāraṇaḥ\nnnābhiṁ me pātu nṛhariḥ sva-nābhi-brahma-saṁstutaḥ\n',
      'brahmāṇḍa-koṭayaḥ kaṭyāṁ yasyāsau pātu me kaṭim\nguhyaṁ me pātu guhyānāṁ mantrāṇām guhya-rūpa-dhṛk\n',
      'ūrū manobhavaḥ pātu jānunī nara-rūpa-dhṛk\njaṅghe pātu dharā-bhāra-hartā yo ’sau nṛ-keśarī\n',
      'sura-rājya-pradaḥ pātu pādau me nṛharīśvaraḥ\nsahasra-śīrṣā-puruṣaḥ pātu me sarvaśas tanum\n',
      'mahograḥ pūrvataḥ pātu mahā-vīrāgrajo ’gnitaḥ\nmahā-viṣṇuḥ dakṣiṇe tu mahā-jvālas tu nairṛtau\n',
      'paścime pātu sarveśo diśi me sarvatomukhaḥ\nnṛsiṁhaḥ pātu vāyavyāṁ saumyāṁ bheeṣaṇa-vigrahaḥ\n',
      'īśānyāṁ pātu bhadro me sarva-maṅgala-dāyakaḥ\nsaṁsāra-bhayadaḥ pātu mṛtyor mṛtyur nṛ-keśarī\n',
      'idaṁ nṛsiṁha-kavacaṁ prahlāda-mukha-maṅḍitam\nbhaktimān yaḥ paṭhennityam sarva-pāpaiḥ pramucyate\n',
      'putravān dhanavān loke dīrghāyur upajāyate\nyaṁ yaṁ kāmayate kāmaṁ taṁ taṁ prāpnoty asaṁśayam\n',
      'sarvatra jayam āpnoti sarvatra vijayī bhavet\nbhūmy antarīkṣa-divyānāṁ grahānāṁ vinivāraṇam\n',
      'vṛścikoraga-sambhūta-viṣāpaharaṇaṁ param\nbrahma-rākṣasa-yakṣāṇāṁ dūrotsāraṇa-kāraṇam\n',
      'bhūrje vā tālapatre vā kavacaṁ likhitaṁ śubham\nkara-mūle dhṛtaṁ yena sidhyeyuḥ karma-siddhayaḥ\n',
      'devāsura-manuṣyeṣu svaṁ svaṁ eva jayaṁ labhet\neka-sandhyaṁ tri-sandhyaṁ vā yaḥ paṭhen niyato naraḥ\n',
      'sarva-maṅgala-māṅgalyaṁ bhuktiṁ muktiṁ ca vindati\ndvā-triṁśati-sahasrāṇi paṭhechhuddhātmabhir nribhih\n',
      'kavacasyāsya mantrasya mantra-siddhiḥ prajāyate\nanena mantra-rājena kṛtvā bhasmābhi maṅtraṇam\n',
      'tilakaṁ bibhriyād yas tu tasya gṛaha-bhayaṁ haret\ntri-vāraṁ japamānas tu dattaṁ vāryābhimantrya ca\n',
      'prāśaye dyam naram mantraṁ nṛsiṁha-dhyānamācaret\ntasya rogāḥ praṇaśyanti ye ca syuḥ kukṣi-sambhavāḥ\n',
      'kimatra bahunoktena nṛsimha sadṛśo bhavet\nmanasā cintitam yattu sa tacchāpnotya samśayaṁ\n',
      'garjantaṁ garjayantam nija-bhuja-patalaṁ sphoṭayantaṁ hatantaṁ\n',
      'dipyantaṁ tāpayantaṁ divi bhuvi ditijaṁ kṣepayantam kṣipantam\nkrandantaṁ roṣayantaṁ diśi diśi satataṁ saṁharantaṁ bharantaṁ\nvīkṣantaṁ ghūrṇayantaṁ kara-nikara-śataiḥ divya-siṁhaṁ namāmi\n',
      'iti śrī-brahmāṇḍa-purāṇe prahlādoktaṁ\nśrī-nṛsiṁha-kavacaṁ sampūrṇam']
},


{
title:"Nivedana Kori Prabhu",
song:['\nnivedana kori prabhu! tomāra caraṇe\npatita adhama āmi, jāne tri-bhuvane\n',
      'āmā-sama pāpī nāhi jagat-bhitore\nmama sama aparādhī nāhiko saṁsāre\n',
      'sei saba pāpa āra aparādha, āmi\nparihāre pāi lajjā, saba jāno’ tumi\n',
      'tumi binā kā’ra āmi loibo śaraṇ?\ntumi sarveśvareśvara, brajendra-nandan!\n',
      'jagat tomāra nātha! tumi sarva-moy\ntomā prati aparādha tumi koro’ kṣoy\n',
      'tumi to’ skhalita-pada janera āśroy\ntumi binā āra kibā āche, doyā-moy!\n',
      'sei-rūpa tava aparādhī jana jata\ntomāra śaraṇāgata hoibe satata\n',
      'bhakativinoda ebe loiyā śaraṇ\ntuwā pade kore āj ātma-samarpan',]
},

{
title:"Śrī Nṛsiṁha Praṇāma",
song:['\nnamas te nara-siṁhāya\nprahlādāhlāda-dāyine\nhiraṇyakaśipor vakṣaḥ-\nśilā-ṭaṅka-nakhālaye\n',
      'ito nṛsiṁhaḥ parato nṛsiṁho\nyato yato yāmi tato nṛsiṁhaḥ\nbahir nṛsiṁho hṛdaye nṛsiṁho\nnṛsiṁham ādiṁ śaraṇaṁ prapadye\n',]
},

{
title:"Ohe! Vaiṣṇava Ṭhākura",
song:['\nohe! vaiṣṇava ṭhākura, doyāra sāgara,\ne dāse karuṇā kori’\ndiyā pada-chāyā, śodha he amāyā,\ntomāra caraṇa dhori\n',
      'chaya bega dami’, chaya doṣa śodhi’,\nchaya guṇa deha’ dāse\nchaya sat-saṅga, deha’ he āmāre\nbosechi saṅgera āśe\n',
      'ekākī āmāra, nāhi pāy bolo,\nharināma-saṅkīrtane\ntumi kṛpā kori’, śraddhā-bindu diyā,\ndeha’ kṛṣṇa-nāma-dhane\n',
      'kṛṣṇa se tomāra, kṛṣṇa dite pāra,\ntomāra śakati āche\nāmi to’ kangala, ‘kṛṣṇa’ ‘kṛṣṇa’ boll’,\ndhāi tava pāche pāche\n',]
},

{
title:"Śrī Pañca-tattva mantra",
song:['\n(jaya) śrī-kṛṣṇa-caitanya prabhu nityānanda\nśrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda\n',]
},

{
title:"Śrī Pañca-tattva praṇāma",
song:['\npañca-tattvātmakaṁ kṛṣṇaṁ bhakta-rūpa-svarūpakam\nbhaktāvatāraṁ bhaktākhyaṁ namāmi bhakta-śaktikam\n\n',]
},

{
title:"Prabhu Tava Pada Yuge",
song:['\nprabhu tava pada-yuge mora nivedan\nnāhi māgi deha-sukha, vidyā, dhana, jan\n',
      'nāhi māgi swarga, āra mokṣa nāhi māgi\nnā kori prārthanā kono vibhūtira lāgi’\n',
      'nija-karma-guna-doṣe je je janma pāi\njanme janme jeno tava nāma-guna gāi\n',
      'ei mātra āśā mama tomār caraṇe\nahoitukī bhakti hṛde jāge anukṣane\n',
      'viṣaye je prīti ebe āchaye āmār\nsei-mata prīti hauk caraṇe tomār\n',
      'vipade sampade tāhā thākuk sama-bhāve\ndine dine vṛddhi hauk nāmera prabhāve\n',
      'paśu-pakṣi ho’ye thāki swarge vā niroye\ntava bhakti rahu bhaktivinoda-hṛdoye\n',]
},

{
title:"Prayer to Lord Nṛsiṁha",
song:['\ntava kara-kamala-vare nakham adbhuta-śṛṅgaṁ\ndalita-hiraṇyakaśipu-tanu-bhṛṅgam\nkeśava dhṛta-narahari-rūpa jaya jagadīśa hare\njaya jagadīśa hare, jaya jagadīśa hare\n\n',]
},

{
title:"Prayer unto the Lotus Feet of Kṛṣṇa",
song:['\nkṛṣṇa taba puṇya habe bhāi\ne-puṇya koribe jabe rādhārāṇī khusī habe\ndhruva ati boli tomā tāi\n',
      'śrī-siddhānta saraswatī śacī-suta priya ati\nkṛṣṇa-sebāya jāra tula nāi\nsei se mohānta-guru jagater madhe uru\nkṛṣṇa-bhakti dey ṭhāi ṭhāi\n',
      'tāra icchā balavān pāścātyete ṭhān ṭhān\nhoy jāte gaurāṅger nām\npṛthivīte nagarādi āsamudra nada nadī\nsakalei loy kṛṣṇa nām\n',
      'tāhale ānanda hoy tabe hoy digvijay\ncaitanyer kṛpā atiśay\nmāyā duṣṭa jata duḥkhī jagate sabāi sukhī\nvaiṣṇaver icchā pūrṇa hoy\n',
      'se kārja je koribāre ājñā jadi dilo more\njogya nahi an dīna hīna\ntāi se tomāra kṛpā māgitechi anurūpā\nāji numi sabār pravīṇa\n',
      'tomāra se śakti pele guru-sebāya bastu mile\njībana sārthak jadi hoy\nsei se sevā pāile tāhale sukhī hale\ntaba saṅga bhāgyate miloy\n',
      'evaṁ janaṁ nipatitaṁ prabhavāhikūpe\nkāmābhikāmam anu yaḥ prapatan prasaṅgāt\nkṛtvātmasāt surarṣiṇā bhagavan gṛhītaḥ\nso ‘haṁ kathaṁ nu visṛje tava bhṛtya-sevām\n',
      'tumi mor cira sāthī bhuliyā māyār lāthi\nkhāiyāchi janma-janmāntare\nāji punaḥ e sujoga jadi hoy jogāyoga\ntabe pāri tuhe milibāre\n',
      'tomāra milane bhāi ābār se sukha pāi\ngocārane ghuri din bhor\nkata bane chuṭāchuṭi bane khāi luṭāpuṭi\nsei din kabe habe mor\n',
      'āji se subidhāne tomāra smaraṇa bhela\nbaro āśā ḍākilām tāi\nāmi tomāra nitya-dāsa tāi kori eta āśa\ntumi binā anya gati nāi\n']
},

{
title:"Prayojanādhideva praṇāma",
song:['\nśrīmān rāsa-rasārambhī vaṁśī-vaṭa-taṭa-sthitaḥ\nkarṣan veṇu-svanair gopīr gopīnāthaḥ śriye ‘stu naḥ\n',]
},

{
title:"Prema-Dhvanī Prayers",
song:['\n• Jaya Oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata Śrī Śrīmad His Divine grace A C Bhaktivedānta Svāmī Prabhupāda-kī Jaya\n',
      '• ISKCON\xa0saṃsthāpaka\xa0ācārya, saviour of the whole world\xa0jagad-guru Śrīla Prabhupāda-kī Jaya\n',
      '• Jaya oṁ viṣṇu-pāda paramahaṁsa parivrājakācārya aṣṭottara-śata Śrī Śrīmad His Divine grace Bhaktisiddhānta Sarasvatī ṭhākura Śrīla Prabhupāda-kī Jaya\n',
      '• Jaya om viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace gaurakiśora dāsa bābājī mahārāja-kī Jaya\n',
      '• Jaya oṁ viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace Saccidānanda bhaktivinoda ṭhākura-kī Jaya\n',
      '• Jaya oṁ viṣṇu-pāda paramahaṁsa nitya-līlā-praviṣṭa His Divine grace Jagannātha dāsa bābājī mahārāja-kī Jaya\n',
      '• Ananta koṭi vaiṣṇava-vṛnda-kī Jaya\n',
      '• Nāmācārya Śrīla haridāsa ṭhākura-kī Jaya\n',
      '• Prem-se kaho Śrī-kṛṣṇa-caitanya prabhu nityānanda Śrī advaita, gadādhara, Śrīvāsādi gaura-bhakta-vṛnda-kī Jaya\n',
      '• Śrī Śrī Rādha-Kṛṣṇa, Gopa-Gopīnatha, śyāma-kuṇḍa, rādhā-kuṇḍa giri-govardhana-kī Jaya\n',
      '• Mathura-vṛndāvana dhāma-kī Jaya\n',
      '• Navadvīpa-māyāpur dhāma-kī Jaya\n',
      '• Jagannātha Purī dhāma-kī Jaya\n',
      '• Gaṅgā-mayī-yamunā-mayī-kī Jaya\n',
      '• Vrinda Devi tulasī Mahārāṇī-kī Jaya\n',
      '• Samāveta bhakta-vṛnda-kī Jaya\n',
      '• Hari-nāma saṅkīrtana- mahā yagna kī Jaya\n',
      '• Nitāi Gaura-premānande haribol\n',
      '• All glories to the assembled devotees\n [Three times\]\n',
      '• All glories to Śrī Guru and Śrī Gaurāṅga\n',
      '• All glories to Śrīla Prabhupāda',]

},

{
title:"Śrī Rādhā praṇāma",
song:['\ntapta-kāñcana-gaurāṅgi rādhe vṛndāvaneśvari\nvṛṣabhānu-sute devī praṇamāmi hari-priye\n',]
},

{
title:"Rādhā-Kṛṣṇa Bol",
song:['\n‘rādhā-kṛṣṇa’ bol bol bolo re sobāi\n(ei) śikhā diyā, sab nadīyā\nphirche nece’ gaura-nitāi\n(miche) māyār bośe, jāccho bhese’,\nkhāccho hābuḍubu, bhāi\n',
      '(jīv) kṛṣṇa-dās, e biśwās,\nkorle to’ ār duḥkho nāi\n(kṛṣṇa) bolbe jabe, pulak ha’be\njhorbe āṅkhi, boli tāi\n',
      '(‘rādhā) kṛṣṇa’ bolo, saṅge calo,\nei-mātra bhikhā cāi\n(jāy) sakal’bipod bhaktivinod\nbole, jakhon o-nām gāi\n',
      ,]
},

{
title:"Śrī Rādhikā-stava",
song:['\nrādhe jaya jaya mādhava-dayite\ngokula-taruṇī-maṇḍala-mahite\n',
      'dāmodara-rati-vardhana-veśe\nhari-niṣkuṭa-vṛndā-vipineśe\n',
      'vṛṣabhānūdadhi-nava-śaśi-lekhe\nlalitā-sakhi guṇa-ramita-viśākhe\n',
      'karuṇāṁ kuru mayi karuṇā-bharite\nsanaka-sanātana-varṇita-carite\n',]
},

{
title:"Śrī Rūpa Mañjarī Pada",
song:['\nśrī-rūpa-mañjarī-pada sei mora sampada\nsei mora bhajana-pūjana\n',
      'sei mora prāṇa-dhana sei mora ābharaṇa\nsei mora jīvanera jīvana\n',
      'sei mora rasa-nidhi sei mora bāñca-siddhi\nsei mora vedera dharama\n',
      'sei vrata, sei tapa sei mora mantra-japa\nsei mora dharama-karama\n',
      'anūkūla habe bidhi se-pade hoibe siddhi\nnirakhiba e dui nayane\n',
      'se rūpa-mādhurī-rāśi prāṇa-kūbalaya śaśi\npraphullita habe niśi dine\n',
      'tuyā adarśana-ahi garale jārala dehi\ncira-dina tāpita jīvana\n',
      'hā hā prabhu! kara dayā deho mora-pada-chāyā\nnarottama laila śaraṇa\n',]
},

{
title:"Śrī Rūpa praṇāma",
song:['\nśrī-caitanya-mano-‘bhīṣṭaṁ sthāpitaṁ yena bhū-tale\nsvayaṁ rūpaḥ kadā mahyaṁ dadāti sva-padāntikam\n',]
},

{
title:"Śrī Śrī Ṣaḍ-gosvāmy-aṣṭaka",
song:['\nkṛṣṇotkīrtana-gāna-nartana-parau premāmṛtāmbho-nidhī\ndhīrādhīra-jana-priyau priya-karau nirmatsarau pūjitau\nśrī-caitanya-kṛpā-bharau bhuvi bhuvo bhārāvahantārakau\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'nānā-śāstra-vicāraṇaika-nipuṇau sad-dharma-saṁsthāpakau\nlokānāṁ hita-kāriṇau tri-bhuvane mānyau śaraṇyākarau\nrādhā-kṛṣṇa-padāravinda-bhajanānandena mattālikau\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'śrī-gaurāṅga-guṇānuvarṇana-vidhau śraddhā-samṛddhy-anvitau\npāpottāpa-nikṛntanau tanu-bhṛtāṁ govinda-gānāmṛtaiḥ\nānandāmbudhi-vardhanaika-nipuṇau kaivalya-nistārakau\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'tyaktvā tūrṇam aśeṣa-maṇḍala-pati-śreṇīṁ sadā tuccha-vat\nbhūtvā dīna-gaṇeśakau karuṇayā kaupīna-kanthāśritau\ngopī-bhāva-rasāmṛtābdhi-laharī-kallola-magnau muhur\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'kūjat-kokila-haṁsa-sārasa-gaṇākīrṇe mayūrākule\nnānā-ratna-nibaddha-mūla-viṭapa-śrī-yukta-vṛndāvane\nrādhā-kṛṣṇam ahar-niśaṁ prabhajatau jīvārthadau yau mudā\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'saṅkhyā-pūrvaka-nāma-gāna-natibhiḥ kālāvasānī-kṛtau\nnidrāhāra-vihārakādi-vijitau cātyanta-dīnau ca yau\nrādhā-kṛṣṇa-guṇa-smṛter madhurimānandena sammohitau\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'rādhā-kuṇḍa-taṭe kalinda-tanayā-tīre ca vaṁśīvaṭe\npremonmāda-vaśād aśeṣa-daśayā grastau pramattau sadā\ngāyantau ca kadā harer guṇa-varaṁ bhāvābhibhūtau mudā\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',
      'he rādhe vraja-devike ca lalite he nanda-sūno kutaḥ\nśrī-govardhana-kalpa-pādapa-tale kālindī-vane kutaḥ\nghoṣantāv iti sarvato vraja-pure khedair mahā-vihvalau\nvande rūpa-sanātanau raghu-yugau śrī-jīva-gopālakau\n',]
},

{
title:"Sakhī-vṛnde Vijñapti",
song:['\nrādhā-kṛṣṇa prāṇa mora jugala-kiśora\njīvane maraṇe gati āro nāhi mora\n',
      'kālindīra kūle keli-kadambera vana\nratana-bedīra upara bosābo du’jana\n',
      'śyāma-gaurī-aṅge dibo (cūwā) candanera gandha\ncāmara ḍhulābo kabe heri mukha-candra\n',
      'gāthiyā mālatīr mālā dibo dohāra gale\nadhare tuliyā dibo karpūra-tāmbūle\n',
      'lalitā viśākhā-ādi jata sakhī-bṛnda\nājñāya koribo sebā caraṇāravinda\n',
      'śrī-kṛṣṇa-caitanya-prabhur dāser anudāsa\nsevā abhilāṣa kore narottama-dāsa\n',]
},

{
title:"Sambandhādhideva praṇāma",
song:['\njayatāṁ suratau paṅgor mama manda-mater gate\nmat-sarvasva-padāmbhojau rādhā-madana-mohanau\n',]
},

{
title:"Sāvaraṇa-śrī-gaura-mahimā",
song:['\ngaurāṅgera duṭi pada, jār dhana sampada,\nse jāne bhakati-rasa-sār\ngaurāṅgera madhura-līlā, jār karṇe praveśilā,\nhṛdoya nirmala bhelo tār\n',
      'je gaurāṅgera nāma loy, tāra hoy premodoy,\ntāre mui jāi bolihāri\ngaurāṅga-guṇete jhure, nitya-līlā tāre sphure,\nse jana bhakati-adhikārī\n',
      'gaurāṅgera saṅgi-gaṇe, nitya-siddha kori’ māne,\nse jāy brajendra-suta-pāś\nśrī-gauḍa-maṇḍala-bhūmi, jebā jāne cintāmaṇi,\ntāra hoy braja-bhūme bās\n',
      'gaura-prema-rasārṇave, śe taraṅge jebā ḍube,\nse rādhā-mādhava-antaraṅga\ngṛhe bā vanete thāke, ‘hā gaurāṅga’ bo’le ḍāke,\nnarottama māge tāra saṅga\n',]
},
  
{
title:"Sāvaraṇa-śrī-gaura-pāda-padme",
song:['\n(1)\nśrī-kṛṣṇa-caitanya prabhu doyā koro more\ntomā binā ke doyālu jagat-saṁsāre\n',
      '(2)\nhā hā prabhu nityānanda, premānanda sukhī\nkṛpābalokana koro āmi boro duḥkhī\n',
      '(3)\ndoyā koro sītā-pati adwaita gosāi\ntava kṛpā-bale pāi caitanya-nitāi\n',
      '(4)\nhā hā swarūp, sanātana, rūpa, raghunātha\nbhaṭṭa-juga, śrī-jīva hā prabhu lokanātha\n',
      '(5)\ndoyā koro śrī-ācārya prabhu śrīnivāsa\nrāmacandra-saṅga māge narottama-dāsa\n',]
},

{
title:"Siddhi Lālasā",
song:['\nkabe gaura-bane, suradhunī-taṭe,\n“hā rādhe hā kṛṣṇa” bo’le\nkāndiyā berā’bo, deho-sukha chāḍi’,\nnānā latā-taru tale\n',
      '(kabe) śwapaca-gṛhete, māgiyā khāibo,\npibo saraswatī-jal\npuline puline, gaḍagaḍi dibo,\nkori’ kṛṣṇa-kolāhal\n',
      '(kabe) dhāma-bāsi jane, praṇati koriyā,\nmāgibo kṛpār leśa\nvaiṣṇava-caraṇa- reṇu gāy mākhi’,\ndhori’ avadhūta-beśa\n',
      '(kabe) gaura-braja-bane, bheda nā dekhibo,\nhoibo baraja-bāsi\n(takhan) dhāmer swarūpa, sphuribe nayane,\nhoibo rādhār dāsī\n',]
},

{
title:"Śrī Śrī Śikṣāṣṭaka",
song:['\nceto-darpaṇa-mārjanaṁ bhava-mahā-dāvāgni-nirvāpaṇaṁ\nśreyaḥ-kairava-candrikā-vitaraṇaṁ vidyā-vadhū-jīvanam\nānandāmbudhi-vardhanaṁ prati-padaṁ pūrṇāmṛtāsvādanaṁ\nsarvātma-snapanaṁ paraṁ vijayate śrī-kṛṣṇa-saṅkīrtanam\n',
      'nāmnām akāri bahudhā nija-sarva-śaktis\ntatrārpitā niyamitaḥ smaraṇe na kālaḥ\netādṛśī tava kṛpā bhagavan mamāpi\ndurdaivam īdṛśam ihājani nānurāgaḥ\n',
      'tṛṇād api sunīcena\ntaror api sahiṣṇunā\namāninā mānadena\nkīrtanīyaḥ sadā hariḥ\n',
      'na dhanaṁ na janaṁ na sundarīṁ\nkavitāṁ vā jagad-īśa kāmaye\nmama janmani janmanīśvare\nbhavatād bhaktir ahaitukī tvayi\n',
      'ayi nanda-tanuja kiṅkaraṁ\npatitaṁ māṁ viṣame bhavāmbudhau\nkṛpayā tava pāda-paṅkaja-\nsthita-dhūlī-sadṛśaṁ vicintaya\n',
      'nayanaṁ galad-aśru-dhārayā\nvadanaṁ gadgada-ruddhayā girā\npulakair nicitaṁ vapuḥ kadā\ntava nāma-grahaṇe bhaviṣyati\n',
      'yugāyitaṁ nimeṣeṇa\ncakṣuṣā prāvṛṣāyitam\nśūnyāyitaṁ jagat sarvaṁ\ngovinda-viraheṇa me\n',
      'āśliṣya vā pāda-ratāṁ pinaṣṭu mām\nadarśanān marma-hatāṁ karotu vā\nyathā tathā vā vidadhātu lampaṭo\nmat-prāṇa-nāthas tu sa eva nāparaḥ\n',]
},

{
title:"Śrīla Bhaktisiddhānta Sarasvatī praṇāma",
song:['\nnama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale\nśrīmate bhaktisiddhānta-sarasvatīti nāmine\n',
      'śrī-vārṣabhānavī-devī-dayitāya kṛpābdhaye\nkṛṣṇa-sambandha-vijñāna-dāyine prabhave namaḥ\n',
      'mādhuryojjvala-premāḍhya-śrī-rūpānuga-bhaktida\nśrī-gaura-karuṇā-śakti-vigrahāya namo ‘stu te\n',
      'namas te gaura-vāṇī-śrī-mūrtaye dīna-tāriṇe\nrūpānuga-viruddhāpasiddhānta-dhvānta-hāriṇe\n',]
},

{
title:"Śrīla Prabhupāda Praṇati",
song:['\nnama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭāya bhū-tale\nśrīmate bhaktivedānta-svāmin iti nāmine\n',
      'namas te sārasvate deve gaura-vāṇī-pracāriṇe\nnirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe\n',]
},

{
title:"Śuddha-bhakata",
song:['\nśuddha-bhakata-caraṇa-reṇu,\nbhajana-anukūla\nbhakata-sevā, parama-siddhi,\nprema-latikāra mūla\n',
      'mādhava-tithi, bhakti-jananī,\njetane pālana kori\nkṛṣṇa-basati, basati boli’,\nparama ādare bori\n',
      'gaur āmāra, je-saba sthāne,\nkoralo bhramaṇa raṅge\nse-saba sthāna, heribo āmi,\npraṇayi-bhakata-saṅge\n',
      'mṛdaṅga-bādya, śunite mana,\nabasara sadā jāce\ngaura-bihita, kīrtana śuni’,\nānande hṛdoya nāce\n',
      'jugala-mūrti, dekhiyā mora,\nparama-ānanda hoya\nprasāda-sebā korite hoya,\nsakala prapañca jaya\n',
      'je-dina gṛhe, bhajana dekhi,\ngṛhete goloka bhāya\ncaraṇa-sīdhu, dekhiyā gaṅgā,\nsukha nā sīmā pāya\n',
      'tulasī dekhi’, jurāya prāṇa,\nmādhava-toṣaṇī jāni’\ngaura-priya, śāka-sevane,\njīvana sārthaka māni\n',
      'bhakativinoda, kṛṣṇa-bhajane,\nanakūla pāya jāhā\nprati-dibase, parama-sukhe,\nswīkāra koroye tāhā\n',]
},

{
title:"Śrī Tulasī Pradakṣiṇa Mantra",
song:['\nyāni kāni ca pāpāni brahma-hatyādikāni ca\ntāni tāni praṇaśyanti pradakṣiṇaḥ pade pade\n',]
},

{
title:"Śrī Tulasī Praṇāma",
song:['\n(oṁ) vṛndāyai tulasī-devyai priyāyai keśavasya ca\nkṛṣṇa-bhakti-prade devi satyavatyai namo namaḥ\n']
},

{
title:"Śrī Tulasī-kīrtana",
song:['\nnamo namaḥ tulasī kṛṣṇa-preyasi namo namaḥ\nrādhā-kṛṣṇa-sevā pābo ei abilāṣī\n',
      'ye tomāra śaraṇa loy, tara vāñchā pūrṇa hoy\nkṛpā kori’ koro tāre vṛndāvana-vāsi\n',
      'mora ei abhilāṣa, vilāsa kuñje dio vāsa\nnayana heribo sadā yugala-rūpa-rāśi\n',
      'ei nivedana dhara, sakhīra anugata koro\nsevā-adhikāra diye koro nīja dāsī\n',
      'dīna kṛṣṇa-dāse koy, ei yena mora hoy\nśrī-rādhā-govinda-preme sadā yena bhāsi\n',]
},

{
title:"Tumi Sarveśvareśvara",
song:['\ntumi sarveśvareśvara, brajendra-kumāra!\ntomāra icchāya viśve sṛjana saṁhāra\n',
      'tava icchā-mato brahmā korena sṛjana\ntava icchā-mato viṣnu korena pālana\n',
      'tava icchā-mate śiva korena saṁhāra\ntava icchā-mate māyā sṛje kārāgāra\n',
      'tava icchā-mate jīver janama-maraṇa\nsamṛddhi-nipāte duḥkha sukha-saṁghaṭana\n',
      'miche māyā-baddha jīva āśā-pāśe phire’\ntava icchā binā kichu korite nā pāre\n',
      'tumi to’ rākhaka ār pālaka āmāra\ntomāra caraṇa binā āśā nāhi āra\n',
      'nija-bala-ceṣṭā-prati bharasā chāḍiyā\ntomāra icchāya āchi nirbhara koriyā\n',
      'bhakativinoda ati dīna akiñcana\ntomāra icchāya tā’r jīvana maraṇa\n',]
},

{
title:"Aruṇodaya-kīrtana Part I-Udilo aruṇa",
song:['\nudilo aruṇa pūraba-bhāge,\ndwija-maṇi gorā amani jāge,\nbhakata-samūha loiyā sāthe,\ngelā nagara-brāje\n',
      '‘tāthai tāthai’ bājalo khol,\nghana ghana tāhe jhāṅjera rol,\npreme ḍhala ḍhala sonāra aṅga,\ncaraṇe nūpura bāje\n',
      'mukunda mādhava yādava hari,\nbolena bolo re vadana bhori’,\nmiche nida-baśe gelo re rāti,\ndivasa śarīra-sāje\n',
      'emana durlabha mānava-deho,\npāiyā ki koro bhava nā keho,\nebe nā bhajile yaśodā-suta,\ncarame poḍibe lāje\n',
      'udita tapana hoile asta,\ndina gelo boli’ hoibe byasta,\ntabe keno ebe alasa hoy,\nnā bhaja hṛdoya-rāje\n',
      'jīvana anitya jānaha sār,\ntāhe nānā-vidha vipada-bhār,\nnāmāśraya kori’ jatane tumi,\nthākaha āpana kāje\n',
      'jīvera kalyāna-sādhana-kām,\njagate āsi’ e madhura nām,\navidyā-timira-tapana-rūpe,\nhṛd-gagaṇe virāje\n',
      'kṛṣṇa-nāma-sudhā koriyā pān,\njuḍāo bhakativinoda-prān,\nnāma vinā kichu nāhiko āra,\ncaudda-bhuvana-mājhe']
},

{
title:"Śrī Vaiṣṇava praṇāma",
song:['\nvāñchā-kalpatarubhyaś ca kṛpā-sindhubhya eva ca\npatitānāṁ pāvanebhyo vaiṣṇavebhyo namo namaḥ\n',]
},

{
title:"Vaiṣṇave Vijñapti",
song:['\nei-bāro karuṇā koro vaiṣṇava gosāi\npatita-pāvana tomā bine keho nāi\n',
      'jāhāra nikaṭe gele pāpa dūre jāy\nemona doyāla prabhu kebā kothā pāy\n',
      'gaṅgāra paraśa hoile paścate pāvan\ndarśane pavitra koro-ei tomāra guṇ\n',
      'hari-sthāne aparādhe tāre hari-nām\ntomā sthāne aparādhe nāhi paritrāṇ\n',
      'tomāra hṛdoye sadā govinda-viśrām\ngovinda kohena-mora vaiṣṇava parāṇ\n',
      'prati-janme kori āśā caraṇera dhūli\nnarottame koro doyā āpanāra boli’\n',]
},

{
title:"Vāsantī-rāsa",
song:['\nvṛndāvana ramya-sthāna divya-ciṅtāmaṇi-dhāma\nratana-mandira manohara\n',
      'abṛta kālindī-nīre rāja-haṁsa keli kare\ntāhe śobhe kanaka-kamala\n',
      'tāra madhye hema-pīṭha aṣṭa-dale beṣṭita\naṣṭa-dale pradhānā nāyikā\n',
      'tāra madhye ratnāsane ba’si āchen dui-jane\nśyāma-saṅge sundarī rādhikā\n',
      'o-rūpa-lābaṇya-rāśi amiya pariche khasi\nhāsya-parihāsa-sambhāṣaṇe\n',
      'narottama-dāsa kaya nitya-līlā sukha-maya\nsadāi sphurūka mora mane\n',]
},

{
title:"Vibhāvarī Śeṣa",
song:['\nvibhāvarī śeṣa, āloka-praveśa,\nnidrā chāri’ uṭho jīva\nbolo hari hari, mukunda murāri,\nrāma kṛṣṇa hayagrīva\n',
      'nṛsiṁha vāmana, śrī-madhusūdana,\nbrajendra-nandana śyāma\npūtanā-ghātana, kaiṭabha-śātana,\njaya dāśarathi-rāma\n',
      'yaśodā dulāla, govinda-gopāla,\nvṛndāvana purandara\ngopī-priya-jana, rādhikā-ramaṇa,\nbhuvana -sundara-bara\n',
      'rāvāṇāntakara, mākhana-taskara,\ngopī-jana-vastra-hārī\nbrajera rākhāla, gopa-vṛnda-pāla,\ncitta-hārī baṁśī-dhārī\n',
      'yogīndra-bandana, śrī-nanda-nandana,\nbraja-jana-bhaya-hārī\nnavīna nīrada, rūpa manohara,\nmohana-baṁśī-bihārī\n',
      'yaśodā-nandana, kaṁsa-nisūdana,\nnikuñja-rāsa-vilāsī\nkadamba-kānana, rāsa-parāyaṇa,\nbṛnda-vipina-nivāsī\n',
      'ānanda-vardhana, prema-niketana,\nphula-śara-jojaka kāma\ngopāṅganā-gaṇa, citta-vinodana,\nsamasta-guṇa-gaṇa-dhāma\n',
      'jāmuna-jīvana, keli-parāyaṇa,\nmānasa-candra-cakora\nnāma-sudhā-rasa, gāo kṛṣṇa-jaśa\nrākho vacana mana mora\n',]
},

{
title:"Vidyāra Vilāse",
song:['\nvidyāra vilāse, kāṭāinu kāla,\nparama sāhase āmi\ntomāra caraṇa, nā bhajinu kabhu,\nekhona śaraṇa tumi\n',
      'poḍite poḍite, bharasā bārilo,\njñāne gati habe māni’\nse āśā biphala, se jñāna durbala,\nse jñāna ajñāna jāni\n',
      'jaḍa-vidyā jata, māyāra vaibhava,\ntomāra bhajane bādhā\nmoha janamiyā, anitya saṁsāre,\njīvake koraye gādhā\n',
      'sei gādhā ho’ye, saṁsārera bojhā,\nbahinu aneka kāla\nbārdhakye ekhona, śaktira abhāve,\nkichu nāhi lāge bhālo\n',
      'jīvana jātanā, hoilo ekhona,\nse vidyā avidyā bhelo\navidyāra jwālā, ghaṭilo biṣama,\nse vidyā hoilo śelo\n',
      'tomāra caraṇa, binā kichu dhana,\nsaṁsāre nā āche āra\nbhakativinoda, jaḍa-vidyā chāḍi,’\ntuwā pada kore sāra\n',]
},

{
title:"Śrī Vraja-dhāma-mahimāmṛta",
song:['\njaya rādhe, jaya kṛṣṇa, jaya vṛndāvan\nśrī govinda, gopīnātha, madana-mohan\n',
      'śyama-kunḍa, rādhā-kuṇḍa, giri-govardhan\nkālindi jamunā jaya, jaya mahāvan\n',
      'keśī-ghāṭa, baṁśi-baṭa, dwādaśa-kānan\njāhā saba līlā koilo śrī-nanda-nandan\n',
      'śrī-nanda-jaśodā jaya, jaya gopa-gaṇ\nśrīdāmādi jaya, jaya dhenu-vatsa-gaṇ\n',
      'jaya bṛṣabhānu, jaya kīrtidā sundarī\njaya paurṇamāsī, jaya ābhīra-nāgarī\n',
      'jaya jaya gopīśwara vṛndāvana-mājh\njaya jaya kṛṣṇa-sakhā baṭu dwija-rāj\n',
      'jaya rāma-ghāta, jaya rohiṇī-nandan\njaya jaya vṛndāvana-bāsī jata jan\n',
      'jaya dwija-patnī, jaya nāga-kanyā-gaṇ\nbhaktite jāhārā pāilo govinda-caraṇ',]
},
]



