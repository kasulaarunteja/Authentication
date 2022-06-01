# Authentication

<ul>
<li>Create a user model and have these fields :-
<ul>
<li>name ( required )</li>
<li>email ( required )</li>
<li>password ( required )</li>
<li>timestamps</li>
</ul>
</li>
<li>create a register and a login route for registering and logging in users</li>
<li>have validations in register for name, email and password</li>
<li>have validations in login for email and password</li>
<li>Create a Post model with following fields
<ul>
<li>title ( required )</li>
<li>body ( required )</li>
<li>user ( references the user collection and is required )</li>
</ul>
</li>
<li>Create the crud for /posts ( Everyone should know what crud is by now )</li>
<li>If user is authenticated only then he should be able to access insert, update and delete posts apis.</li>
</ul>
