import { Icon } from '@iconify/react';
import { ActionIcon, NavLink, ThemeIcon } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import type { NavPath } from '@/types/NavPath';

const NavLinkList = ({
  paths,
  level,
  count = 0,
  handleClick,
}: {
  paths: NavPath[];
  level: number;
  count?: number;
  handleClick?: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <>
      {paths.map((path, index) => {
        const continueLevel = count < level && !!path.subPath;
        const isActive = window.location.pathname === path.path;

        const handleLinkClick = (ev: React.MouseEvent<HTMLElement>) => {
          const clickNavLinkSection = Array.from(ev.currentTarget.childNodes)
            .filter((el) => el.contains(ev.target as HTMLElement))
            .pop() as HTMLElement;

          // NOTE: Parent & icon & label click will trigger handleClick, not
          // rightSection (toggle)
          if (
            !clickNavLinkSection?.classList.contains(
              'mantine-NavLink-rightSection',
            )
          ) {
            // Don't know why Link is not working
            navigate(path.path);
            handleClick();
          }
        };

        return (
          <NavLink
            active={isActive}
            color={path.color}
            component={Link}
            icon={
              path.icon && (
                <ThemeIcon color={path.color} size="lg" variant="light">
                  <Icon height={24} icon={path.icon} width={24} />
                </ThemeIcon>
              )
            }
            key={`${index}-${count}`}
            label={path.label}
            onClick={handleLinkClick}
            rightSection={
              continueLevel ? (
                <ActionIcon color={path.color} size={32} variant="filled">
                  <Icon
                    height={24}
                    icon="ic:outline-chevron-right"
                    width={24}
                  />
                </ActionIcon>
              ) : undefined
            }
            to={path.path}
          >
            {continueLevel && (
              <NavLinkList
                count={count + 1}
                handleClick={handleClick}
                level={level}
                paths={path.subPath}
              />
            )}
          </NavLink>
        );
      })}
    </>
  );
};

export { NavLinkList };
