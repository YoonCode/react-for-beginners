# react-for-beginners

## The basic of React
- JS 구문을 JSX 구문으로 변환하는 방법 이해
- JSX 구문을 Babel을 통해 JS 구문으로 변환하는 방법 이해
- 컴포넌트를 다른 컴포넌트 안에 넣는 방법 이해
1. 요소를 function component로 변환할 것
2. component명은 대문자로 시작할 것
3. <Component /> 형식으로 불러올 것

## useState
- useState가 어떤 문제를 해결해주는지 이해
1. 데이터가 바뀔 때마다 컴포넌트를 re-render하면서 UI를 refresh
2. re-render 한다는 것은 컴포넌트를 재생성한다는 것
3. 다만, 전체를 refresh 하는 것이 아니라 바뀐 데이터만 refresh

## props
- props를 이용해서 재사용 가능한 컴포넌트를 만들기
1. props로 전달되는 함수와 event listener를 구분하는 것이 중요
2. memo를 사용해서 값이 바뀐 컴포넌트만 re-render해서 랜더링 시간을 줄일 수 있음
- propTypes를 이용해서 props 타입 에러 여부를 점검

## create-react-app
- 설치: npx create-react-app [앱이름]
- Component.module.css를 이용하면 Component 뿐만 아니라 CSS도 모듈화해서 관리할 수 있음

## useEffect
- 한 번만 render하거나 특정 데이터가 변경될 때만 render하도록 제어
1. useEffect(() => {}, [])
2. useEffect(() => {}, [state1, state2, ...])
- clean-up function: 컴포넌트 생성 후에 컴포넌트가 파괴될 때 실행하는 콜백 함수
1. useEffct(hiFn, [])
2. const Fn1 = () => {hiFn; return byeFn;}