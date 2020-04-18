# Remote Jobs

A full stack platform to post and apply to jobs. 

### Some key points:

- React.js, Django Rest Framework, Bootstrap (deployed to pythonanywhere.com)
- Entirely functional-component based React frontend (to make use of React Hooks).
- Frontend user authentication & protected routes.
- Protected backend API urls.
- User alerts for better UX.
- The ability for users to post jobs.
- The ability to apply for jobs with resumes (files).
- The ability for job recruiters to view/download these applications.
- Modern simplistic style. (frontend organised in such a way to maximise component styling).
- Key focus on reusable React components (and file structure).
- Empty state SVG illustrations to make for better UX.
- Designed for desktop but has mobile usability. 


## Quick Start

Enter Virtual Environment
```
pipenv shell
```

Backend: Make Migrations, Migrate & run server
```
cd ./jobmanager/
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Frontend: Install Packages, build/serve Webpack file
```
npm install 
npm run dev
```