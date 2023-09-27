import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { fetchMembers } from '../store/reducers/members';

const Members = () => {
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector(
    (state) => state.members
  );

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <p>Select a member to be shown</p>
      {isLoading ? (
        <h1>Loading ....</h1>
      ) : (
        <>
          {members.length &&
            members.map((user, index) => {
              const userName = `${user.name.first} ${user.name.last}`;
              return (
                <>
                  <Link to={userName}>{userName}</Link>{' '}
                  {index < members.length - 1 ? (
                    <>| </>
                  ) : null}
                </>
              );
            })}
        </>
      )}
      <Outlet />
    </div>
  );
};

export default Members;
