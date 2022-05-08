# Hackfest 2k22

Team Project for Hackfest 2k22 Hackathon.
<h3>Team Name : WEB DEMONS</h3>
<h4> Team members : </h4>
Bhimesh Agrawal (BACKEND AND INTEGRATION) <br/>
Shubham Singh (FRONTEND AND INTEGRATION) <br/>
Akash Mittal (FRONTEND) <br/>
Syed Areeb (ML) <br/>
Shubham Kurrey (UI/UX) <br/>
<hr/>

<b>Our Idea : </b>
<p>We have created a platform where citizens would be able to upload the medicine's name they don't need anymore and then those medicines would be collected and re-distributed among needy people. Our application aims to reduce the medical wastage happening all over India by creating a simpler and easier way of communication between the citizens and the NGO's. This will also cut-off the demands of medicines and hence the cost.</p>

<i>Some Background Knowledge: </i>
<i> India's concern over medicine is a huge issue. India generated 56,898 tonnes of Covid-19 bio-medical waste between June 2020 and June 2021. Nowadays, medicines are getting costlier and not everyone can afford them. So instead of dumping the remaining medicines, it can be re-distributed(If not expired) to the people who need those Medicines. Such tasks are carried out by several NGO's but many citizens are still not aware of these and NGO's also lack a systematic way of collecting and redistributing medicines. </i>
<hr/>
<h1> Our Front-End :</h1>

<h2>1. SignIn-SignUp page created :</h2>
<p>Sign-Up has 2 options, one for Donor and another for NGO, and accordingly it will redirect us to the corresponding page.</p>
![login](https://user-images.githubusercontent.com/78265224/167241415-9ac6a4f1-2637-46d6-b849-bdf0543bd4c4.png)
<br>
![SignUp](https://user-images.githubusercontent.com/78265224/167241428-2a9cb2fb-9282-4c7f-bb50-aaee9ea572ca.png)
<br>

<h2>2. Donor page created</h2>
<h4>
  The Donor page consists of 2 sections :
</h4>
<p>
  <b>1. Incentive Section :</b> To engage and motivate the user to donate medicine. <br/>
  <b>2. Form Section :</b> To get the details of the medicine that the donor wants to donate.<br/>
  <i>ADDITIONAL FEATURE : In the form, if the donor is unable to fill the information of medicine, he can also upload the picture of the medicine and we have used OPEN CV to extract the name, strength, expiry-date and other required details.</i>
</p>
![HomePageUser](https://user-images.githubusercontent.com/78265224/167241608-05c3e865-bf22-417f-89f9-2046d5f3dbab.png)
<br>
![form-laptop](https://user-images.githubusercontent.com/78265224/167241845-30576f22-c18a-498c-968c-95d33c5fa7aa.png)
<br>
<b>Mobile view :</b>
</br>
![mobile-user-page](https://user-images.githubusercontent.com/78265224/167241618-59d4fcab-7d59-4fc5-8478-2ec52171a8b5.png)
<br>
![form-mobile](https://user-images.githubusercontent.com/78265224/167241853-13b25d84-2e98-4bb6-8764-8503de1c46e0.png)
<br>

<h2>3. NGO page created</h2>
<p>
  The NGO page consists a search section where the NGO will search for the respective medicines they need and can collect it from the user.
  Once the NGO clicks the collect button, user will be notified and his incentives will be updated correspondingly.
</p>
![ngo-laptop](https://user-images.githubusercontent.com/78265224/167241943-e2523c5e-368f-483d-a582-75b58a59ee3a.png)
<br>
<b>Mobile view :</b>
</br>
![ngo-mobile](https://user-images.githubusercontent.com/78265224/167241962-55e61bfc-2a0a-48e5-a866-2959d3a7b630.png)
<br/>
<h2>4. Other secondary pages created</h2>
<p> 
  About page creted containing details of our project.<br/>
  OTP verification page created to enter and verify the OTP while signing up.<br/>
</p>
![verify](https://user-images.githubusercontent.com/78265224/167283473-f676ced1-2230-4177-935d-c66aa7fcb410.png)
<br/>
![about](https://user-images.githubusercontent.com/78265224/167283479-afbfa00a-6d72-4fd1-b365-2bd81d7371ed.png)
<br/>

<hr/>
<h1> Our Current Back-End Progress :</h1>
<p>On the Backend part, we have created the database schema of the user and the medicine , also we have created various routes for login , registration , and donor form filling,also we had setup nodemailer in the website to use as a mailing system these routes will now be linked to the frontend of the website and hence the website will work integratively.</p>
<br/>

