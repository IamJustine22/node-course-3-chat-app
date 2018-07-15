const expect = require('expect');

const {Users} = require('./users');
var users;

beforeEach(() =>  {
    users = new Users();
    users.users =[{
        id: '1',
        name: 'Mike',
        room: 'Dating'
    } ,   {
    id: '2',
    name: 'Rose',
    room: 'Love'
    },  {
        id: '3',
        name: 'Ben',
        room: 'Dating'
    }];
});


    it('should add new user', () => {
        var users =  new Users();
        var user = {
            id: '123',
            name :'Justine',
            room:'Singles'
        
        };

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

it('should remove a user', () => {
var userId = '1';
var user = users.removeUser(userId);
expect(user.id).toBe(userId);
expect(users.users.length).toBe(2);

});

it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);
expect(user).toNotExist();
expect(users.users.length).toBe(3);


});


it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
});

it('should not find user', () => {
 var userId = '99';
 var user  = users.getUser(userId);

 expect(user).toNotExist();
})



  it('should return names for Dating', () => {
var userList = users.getUserList('Dating');
 expect(userList).toEqual(['Mike', 'Ben']);
        });

        it('should return names for Love', () => {
            var userList = users.getUserList('Love');
             expect(userList).toEqual(['Rose']);
                    });
            
        









