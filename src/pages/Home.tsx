import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonIcon
} from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import { add,remove } from 'ionicons/icons';


const Home: React.FC = () => {
  var [scorePlayer1, setScorePlayer1] = useState(0);
  var [scorePlayer2, setScorePlayer2] = useState(0);

  function menaikanScorePlayer1(){
    scorePlayer1++
    setScorePlayer1(scorePlayer1)
  }
  function menurunkanScorePlayer1(){
    if(scorePlayer1<=0)return
    scorePlayer1--
    setScorePlayer1(scorePlayer1)
  }
  function menaikanScorePlayer2(){
    scorePlayer2++
    setScorePlayer2(scorePlayer2)
  }
  function menurunkanScorePlayer2(){
    if(scorePlayer2<=0)return
    scorePlayer2--
    setScorePlayer2(scorePlayer2)
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Badminton Scoring</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRow>
          <IonCol className="scoring">
            <div>
              Yoni
            </div>
            <div>
              <IonButton expand="block" fill="outline" onClick={menaikanScorePlayer1}><IonIcon icon={add} /></IonButton>
            </div>
            <div>
              <IonInput className="score" color="primary" value={String(scorePlayer1)}></IonInput>
            </div>
            <div>
              <IonButton expand="block" fill="outline" onClick={menurunkanScorePlayer1}><IonIcon icon={remove} /></IonButton>
            </div>
          </IonCol>
          <IonCol className="scoring">
            <div> 
               Saka
            </div>
            <div>
              <IonButton expand="block" fill="outline" onClick={menaikanScorePlayer2}><IonIcon icon={add} /></IonButton>
            </div>
            <div>
              <IonInput className="score" color="primary" value={String(scorePlayer2)}></IonInput>
            </div>
            <div>
              <IonButton expand="block" fill="outline" onClick={menurunkanScorePlayer2}><IonIcon icon={remove} /></IonButton>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Home;
