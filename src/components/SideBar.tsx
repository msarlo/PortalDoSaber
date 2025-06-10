import Link from 'next/link';

// Interface para os itens da sidebar 
export interface SidebarItem {
  title: string;
  slug: string; 
  subItems?: SidebarItem[];
}

// Interface para a sidebar em si  
interface SideBarProps {
  title: string; 
  items: SidebarItem[]; 
  
}

export function SideBar({ title, items }: SideBarProps) {
  return (
    <aside className="fixed w-64 md:w-72 bg-gradient-to-b from-white via-blue-400 to-white text-black p-4 overflow-y-auto">
      
      <div className="mb-6">
        <h2 className="text-xl font-bold text-black tracking-tight">{title}</h2> 
      </div>

      <nav> 
        <ul className="space-y-1"> 
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`#${item.slug}`}
                className="flex items-center py-2 px-3 rounded-md text-black hover:bg-blue-100 hover:text-black transition-all duration-150 ease-in-out group"
              >
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="pl-4 mt-1 space-y-0.5 border-l border-blue-400 ml-2.5">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.slug}>
                      <Link
                        href={`#${subItem.slug}`}
                        className="flex items-center py-1.5 px-3 rounded-md text-black hover:bg-blue-50 hover:text-black transition-all duration-150 ease-in-out group"
                      >
                        <span className="text-xs">{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}