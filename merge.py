string="""Brahma-saṁhitā

D
Dainya O Prapatti- Hari He Doyāl Mor
Dāmodaraṣṭaka
Daśāvatāra-stotra

G
Gaurā Pahu
Gaura-ārati
Gaurakiśora praṇāma
Gaurāṅga praṇāma
Gaura-Nityānander Dayā
Gopīnātha
Greeting the deities
Guru praṇāma
Gurudeva
Guru-vandanā
Gurv-aṣṭaka

H
Hare Kṛṣṇa Mahā-mantra

I
Iṣṭa-deve Vijñapti

J
Jagannātha praṇāma
Jaya Rādhā-Mādhava
Jīv jāgo

K
Kabe Caitanya
Kabe Ha’be Bolo
Kṛṣṇa praṇāma

L
Lālasāmayī Prārthana

M
Mama Mana Mandire
Manaḥ-śikṣā
Mānasa Deha Geha
Maṅgalācaraṇa

N
Śrī Nāma
Nāma-kīrtana
Nāma-saṅkīrtana
Nārada Muni Bājāy Vīṇā
Narasiṁha-kavaca
Nivedana kori prabhu
Nṛsiṁha Praṇāma

O
Ohe! Vaiṣṇava Ṭhākura

P
Pañca-tattva mantra
Pañca-tattva praṇāma
Prabhu tava pada
Prayer to Lord Nṛsiṁha
Prayer unto the Lotus Feet of Kṛṣṇa
Prayojanādhideva praṇāma
Prema-Dhvanī Prayers

R
Rādhā praṇāma
Rādhā-Kṛṣṇa Bol
Rādhikā-stava
Rūpa Mañjarī Pada
Rūpa praṇāma

S
Ṣaḍ-gosvāmy-aṣṭaka
Sakhī-vṛnde Vijñapti
Sambandhādhideva praṇāma
Sāvaraṇa-śrī-gaura-mahimā
Sāvaraṇa-śrī-gaura-pāda-padme
Siddhi Lālasā
Śikṣāṣṭaka
Śrīla Bhaktisiddhānta Sarasvatī praṇāma
Śrīla Prabhupāda Praṇati
Śuddha-bhakata

T
Tulasī Pradakṣiṇa Mantra
Tulasī Praṇāma
Tulasī-kīrtana
Tumi Sarveśvareśvara

U
Udilo aruṇa

V
Vaiṣṇava praṇāma
Vaiṣṇave Vijñapti
Vāsantī-rāsa
Vibhāvarī Śeṣa
Vidyāra Vilāse
Vraja-dhāma-mahimāmṛta

"""


seperate=string.split("\n")

for i in seperate:
	if len(i)!=0 and len(i)!=1 and i!="":
		print('<Item item="'+i+'" />')
	if len(i)==1:
		print("<Title title={'"+i+"'} />")



print(len(seperate))