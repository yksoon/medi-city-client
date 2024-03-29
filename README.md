# Medi-City Membership
- 본 프로젝트는 한국의 의료종사자들의 멤버쉽 페이지이다.

링크 : [medi-people.co.kr](http://www.medi-people.co.kr/)

## 특징
- 한국의 의료종사자들의 시술 작업을 인도네시아의 k-medi 플랫폼에 업로드 하여 리워드를 산정 한다.
- 리워드를 사용하여 호텔 및 숙박 업소의 할인 혜택을 제공 받는다.
- 한국 - 인도네시아 서비스를 진행하는 자사 프로젝트.

## 개발 환경 및 사용 툴
- 백엔드 : JAVA
- 백엔드 프레임워크 : Springboot
- 프론트엔드 : Javascript
- 프론트엔드 프레임워크 : ReactJS, Webpack -> Vite (컴파일러)
- Server : Linux (CentOS)(dev), AWS EC2(product) + Apache(dev) + nginx(product)
- 상태관리 라이브러리 : Recoil
- 외부연동 : Nicepay 본인인증 서비스 (PASS)

## 작업기간
- 2023.06 ~

## 구동 사진
![메디시티 메인](https://github.com/yksoon/medi-city-client/assets/62881936/faa3e0cd-35a6-4a80-8753-5bfb5ae211cb)
![메디시티 회원가입](https://github.com/yksoon/medi-city-client/assets/62881936/16dff12a-e032-4207-a10b-d88eef3fde39)

## 구현 설명
- REST API를 이용하여 Back-End와 통신.
- 구현에 필요한 Skeleton 및 scaffolding 작업.
- 사용성과 사용범위를 넓히기 위하여 module화를 진행하였고, 그 결과 확장성이 용이 함.
- Component의 재활용과 module의 재사용으로 프로젝트 진행 시간 최소화.
- Webpack 빌더의 무거운 환경을 개선하고자 Vite 로 마이그레이션 진행.
- Redux -> Recoil 로 변경.
- EC2 이중화 작업 진행.

## 느낀점
- Front-End의 로직 구현에 대한 다양한 방법의 시도 필요.
- Network 및 하드웨어 cost를 최소화 하기 위해 더욱 다양한 방법과 로직 구현 필요.
