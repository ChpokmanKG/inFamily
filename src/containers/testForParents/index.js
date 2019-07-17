import React from 'react';

class TestForParents extends React.Component{
  
  state = {
    questions:
    [
      `Давно ли вы думаете об усыновлении / опеке? (более полугода)`,
      `Было ли какое-то событие, которое повлияло на ваше решение?`,
      `Было ли это событие связано с потерей детей?`,
      `Был ли у вас опыт в сфере воспитания детей?`,
      `Изменится ли ваш образ жизни с принятием ребенка в свою семью?`,
      `Согласен ли ваш супруг / супруга на принятие ребенка в семью?`,
      `Мы сможем сделать для этого ребенка то, чего в свое время никто не сделал для нас (мы не причиним этому ребенку того, что причинили нам)`,
      `Поддерживают ли вас родственники и друзья?`,
      `Есть ли у вас предпочтения относительно пола, возраста и национальности ребенка?`,
      `Готовы ли вы принять в семью несколько детей?`,
      `Хотите ли вы рассказать ребенку о том, что он приемный, если усыновление было в младенческом возрасте?`,
      `Усыновленный ребенок легко вольется в семью, а родственники с радостью его примут`,
      `Готовы ли вы поддерживать контакт с биологическими родственниками ребенка?`,
      `Сильно ли изменится ваше отношение к ребенку, если вы узнаете, что он склонен ко лжи, воровству, манипулированию?`,
      `Готовы ли вы взять ребенка, который пережил физическое, сексуальное насилие, имеет опыт уличной жизни?`,
      `Важны ли для вас успехи ребенка в обучении?`,
      `Готовы ли вы проходить различное обучение и читать литературу о приёмных детях?`,
      `Сможете ли вы сразу же ощутите любовь и привязанность к приемному ребенку?`,
      `Приемный ребенок войдет в семью и легко научится следовать нашим правилам, ценностям и ожиданиям.`,
      `Потребности приемного ребенка не отличаются от потребностей биологических детей.`,
      `Наши биологические дети воспримут усыновленного ребенка как родного брата или сестру`,
      `Наши друзья и знакомые оценят нашу роль в воспитании и жизни ребенка, будут поддерживать нас во время процесса усыновления и после его завершения`,
      `Наш ребенок будет относиться к нам, как к своей семье, и забудет о своих биологических родителях и о своем прошлом`,
      `Мы никогда не пожалеем о своем решении усыновить ребенка и не усомнимся в нем.`,
    ],
    answerScore: [1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,],
    userChanceScore: [],
    finalScore: [],
    count: 0
  }

  userChance(num) {
    this.state.userChanceScore.push(num);
    this.setState({
      userChanceScore: this.state.userChanceScore
    })
  }

  onClick(type,num) {
    if(this.state.count >= 23) {
      this.compare();
    }
    if(this.state.count <= 23) {
      this.userChance(num);
      this.setState(prevState => ({
        count: type === 'add' ? prevState.count + 1 : prevState.count - 1
      }))
    }
  }

  compare() {
    let { answerScore, userChanceScore, finalScore } = this.state;
    for( let i = 0; i < answerScore.length; i++ ) {
      if( answerScore[i] === userChanceScore[i] ) {
        finalScore.push(answerScore[i]);
        this.setState({
          finalScore: finalScore
        })
      }
    }
    
  }

  showButton() {
    let {count} = this.state;

    if(count < 24) {
      return (
        <>
          <button onClick={this.onClick.bind(this,'add',1)}>Да</button>
          <button onClick={this.onClick.bind(this,'add',0)}>Нет</button>
        </>
      )
    }
  }

  mainContent() {
    let {count, questions, finalScore} = this.state;
    const sum = (acc,value) => acc + value;
    if(count < 24) {
      return (
        <>
          <p>{count + 1} / {questions.length}</p>
          <h3>{questions[count]}</h3>
        </>
      )
    }else {
      return (
        <h3>{Math.floor(finalScore.reduce(sum,0) / 11 * 100)}</h3>
      )
    }
  }

  render() {
    console.log(this.state.userChanceScore);
    return (
      <div className="content__text-wrap h100proc bg-white">
        <div className="content__questions-wrap h100proc all-center">
          <div className="w100">
            {this.mainContent()}
          </div>
          <div className="w100">
            {this.showButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default TestForParents;